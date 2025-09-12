'use client';

import { useLayoutEffect, useMemo, useRef } from 'react';

import { SkillIcon } from '@/components/common/TechnologyLogos';
import type { SkillKey } from '@/components/common/TechnologyLogos';

interface SkillSwarmProps {
  skills: SkillKey[];
  width?: number;
  height?: number | string;
  iconSize?: number;
  speed?: [number, number];
  className?: string;
  titlePrefix?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const getViewportWidth = () =>
  Math.max(
    typeof window !== 'undefined' ? window.innerWidth : 0,
    typeof document !== 'undefined' ? document.documentElement?.clientWidth || 0 : 0,
    typeof document !== 'undefined' ? document.body?.clientWidth || 0 : 0,
  );

const getViewportHeight = () =>
  Math.max(
    typeof window !== 'undefined' ? window.innerHeight : 0,
    typeof document !== 'undefined' ? document.documentElement?.clientHeight || 0 : 0,
    typeof document !== 'undefined' ? document.body?.clientHeight || 0 : 0,
  );

const parseHeight = (h?: number | string): number | undefined => {
  if (typeof h === 'number') return h;
  if (typeof h === 'string') {
    const m = h.trim().match(/^(\d+(?:\.\d+)?)vh$/i);
    if (m) {
      const pct = parseFloat(m[1]);
      return (getViewportHeight() * pct) / 100;
    }
  }
  return undefined;
};

const SkillSwarm: React.FC<SkillSwarmProps> = ({
  skills,
  width,
  height,
  iconSize = 28,
  speed = [0.8, 2.0],
  className = '',
  titlePrefix = 'Skill',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partsRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const boundsRef = useRef<{ w: number; h: number }>({ w: 140, h: 280 });

  // Precompute radii for each icon
  const radii = useMemo(() => skills.map(() => iconSize / 2 + 6), [skills, iconSize]);

  useLayoutEffect(() => {
    const measure = () => {
      const measuredW =
        typeof width === 'number'
          ? width
          : getViewportWidth() || (containerRef.current?.clientWidth ?? 140);
      const parsedH = parseHeight(height);
      const measuredH =
        typeof height === 'number'
          ? height
          : (parsedH ?? (getViewportHeight() || (containerRef.current?.clientHeight ?? 280)));
      boundsRef.current = { w: measuredW, h: measuredH };
      return { w: measuredW, h: measuredH };
    };

    const { w, h } = measure();

    // Initialize positions without heavy overlap
    const particles: Particle[] = [];
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    for (let i = 0; i < skills.length; i++) {
      const r = radii[i];
      let x = rand(r, w - r);
      let y = rand(r, h - r);

      // try to avoid initial overlaps with simple retries
      let tries = 0;
      while (tries < 40) {
        let overlap = false;
        for (let j = 0; j < particles.length; j++) {
          const p = particles[j];
          const dx = x - p.x;
          const dy = y - p.y;
          const dist2 = dx * dx + dy * dy;
          const minDist = r + p.r;
          if (dist2 < minDist * minDist) {
            overlap = true;
            break;
          }
        }
        if (!overlap) break;
        x = rand(r, w - r);
        y = rand(r, h - r);
        tries++;
      }

      const s = rand(speed[0], speed[1]);
      const angle = rand(0, Math.PI * 2);
      particles.push({ x, y, vx: Math.cos(angle) * s, vy: Math.sin(angle) * s, r });
    }

    partsRef.current = particles;

    const step = () => {
      const ps = partsRef.current;
      // Move and wall bounce
      const { w, h } = boundsRef.current;
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x - p.r < 0) {
          p.x = p.r;
          p.vx *= -1;
        } else if (p.x + p.r > w) {
          p.x = w - p.r;
          p.vx *= -1;
        }

        if (p.y - p.r < 0) {
          p.y = p.r;
          p.vy *= -1;
        } else if (p.y + p.r > h) {
          p.y = h - p.r;
          p.vy *= -1;
        }
      }

      // Simple elastic collisions between particles (approx.)
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const a = ps[i];
          const b = ps[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist2 = dx * dx + dy * dy;
          const minDist = a.r + b.r;
          if (dist2 < minDist * minDist) {
            const dist = Math.sqrt(dist2) || 0.0001;
            const nx = dx / dist; // normal
            const ny = dy / dist;

            // Separate the circles to avoid sticking
            const overlap = minDist - dist;
            const push = overlap / 2;
            a.x -= nx * push;
            a.y -= ny * push;
            b.x += nx * push;
            b.y += ny * push;

            // 1D elastic collision along the normal (equal mass)
            const va = a.vx * nx + a.vy * ny;
            const vb = b.vx * nx + b.vy * ny;
            const diff = vb - va;
            a.vx += diff * nx;
            a.vy += diff * ny;
            b.vx -= diff * nx;
            b.vy -= diff * ny;
          }
        }
      }

      // Apply to DOM
      for (let i = 0; i < ps.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const p = ps[i];
        el.style.transform = `translate(${p.x - p.r}px, ${p.y - p.r}px)`;
      }

      rafRef.current = requestAnimationFrame(step);

      // Post-mount re-measure on next frame to catch initial layout shifts
      if (typeof window !== 'undefined') {
        requestAnimationFrame(() => {
          const { w, h } = measure();
          // Re-center positions into new bounds if expanded
          const ps = partsRef.current;
          for (let i = 0; i < ps.length; i++) {
            const p = ps[i];
            p.x = Math.min(Math.max(p.r, p.x), w - p.r);
            p.y = Math.min(Math.max(p.r, p.y), h - p.r);
          }
        });
      }
    };

    rafRef.current = requestAnimationFrame(step);

    // Re-measure and reinit on resize (throttled via rAF)
    let ro: ResizeObserver | null = null;
    let scheduled = false;
    const onResize = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        const { w, h } = measure();
        const ps: Particle[] = [];
        const rand = (min: number, max: number) => min + Math.random() * (max - min);
        for (let i = 0; i < skills.length; i++) {
          const r = radii[i];
          const x = rand(r, w - r);
          const y = rand(r, h - r);
          const s = rand(speed[0], speed[1]);
          const angle = rand(0, Math.PI * 2);
          ps.push({ x, y, vx: Math.cos(angle) * s, vy: Math.sin(angle) * s, r });
        }
        partsRef.current = ps;
      });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize);
      if ('ResizeObserver' in window) {
        ro = new ResizeObserver(onResize);
        if (containerRef.current) ro.observe(containerRef.current);
      }
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (ro) ro.disconnect();
      if (typeof window !== 'undefined') window.removeEventListener('resize', onResize);
    };
  }, [skills, width, height, speed, radii]);

  // Ensure ref array length without losing existing refs
  if (itemRefs.current.length !== skills.length) {
    itemRefs.current.length = skills.length;
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden pointer-events-none select-none ${className}`}
      style={{ width: width ?? '100vw', height: height ?? '100vh' }}
      aria-hidden
    >
      {skills.map((name, i) => (
        <div
          key={`${name}-${i}`}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute will-change-transform"
          style={{ width: iconSize + 12, height: iconSize + 12 }}
          title={`${titlePrefix}: ${name}`}
        >
          <div className="w-full h-full glass-card rounded-xl border border-[var(--border)] flex items-center justify-center">
            <SkillIcon name={name} className="text-[var(--foreground)]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSwarm;
