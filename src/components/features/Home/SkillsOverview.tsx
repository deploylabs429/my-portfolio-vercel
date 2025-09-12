const SkillsOverview = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="skills-overview-title">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="skills-overview-title" className="text-xl md:text-2xl font-semibold mb-6">
          Core Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-5 rounded-2xl border border-[var(--border)]">
            <h3 className="font-semibold mb-3">Frontend & Rendering</h3>
            <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              <span className="glass px-2 py-1 rounded-md">React</span>
              <span className="glass px-2 py-1 rounded-md">TypeScript</span>
              <span className="glass px-2 py-1 rounded-md">Next.js</span>
              <span className="glass px-2 py-1 rounded-md">Canvas</span>
              <span className="glass px-2 py-1 rounded-md">WebGL</span>
              <span className="glass px-2 py-1 rounded-md">WASM</span>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl border border-[var(--border)]">
            <h3 className="font-semibold mb-3">Backend & Realtime</h3>
            <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              <span className="glass px-2 py-1 rounded-md">Node.js</span>
              <span className="glass px-2 py-1 rounded-md">Python</span>
              <span className="glass px-2 py-1 rounded-md">Express</span>
              <span className="glass px-2 py-1 rounded-md">GraphQL/REST</span>
              <span className="glass px-2 py-1 rounded-md">WebSockets</span>
              <span className="glass px-2 py-1 rounded-md">Stripe</span>
            </div>
          </div>
          <div className="glass-card p-5 rounded-2xl border border-[var(--border)]">
            <h3 className="font-semibold mb-3">AI & Visualization</h3>
            <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              <span className="glass px-2 py-1 rounded-md">GPT UX</span>
              <span className="glass px-2 py-1 rounded-md">Computer Vision</span>
              <span className="glass px-2 py-1 rounded-md">TensorFlow integ.</span>
              <span className="glass px-2 py-1 rounded-md">D3.js</span>
              <span className="glass px-2 py-1 rounded-md">Dashboards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;
