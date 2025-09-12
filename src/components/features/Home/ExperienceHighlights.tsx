const ExperienceHighlights = () => {
  return (
    <section className="py-12 md:py-16" aria-labelledby="experience-highlights-title">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="experience-highlights-title" className="text-xl md:text-2xl font-semibold mb-6">
          Recent Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="glass-card p-6 rounded-2xl border border-[var(--border)]">
            <header className="mb-4">
              <h3 className="text-lg font-semibold">Senior Software Engineer @ FoxyAI</h3>
              <p className="text-[var(--muted)] text-sm">Dec 2023 – Aug 2025</p>
            </header>
            <ul className="text-[var(--muted)] text-sm space-y-2 list-disc list-inside">
              <li>
                Built React/TypeScript dashboards for Visual Property Intelligence (scores,
                detections, valuations).
              </li>
              <li>Launched GPT-powered multimodal search across large property datasets.</li>
              <li>Optimized Canvas/WebGL pipelines to reduce UI latency and improve fidelity.</li>
            </ul>
          </article>
          <article className="glass-card p-6 rounded-2xl border border-[var(--border)]">
            <header className="mb-4">
              <h3 className="text-lg font-semibold">Senior Full-Stack Engineer @ Figma</h3>
              <p className="text-[var(--muted)] text-sm">May 2019 – Dec 2023</p>
            </header>
            <ul className="text-[var(--muted)] text-sm space-y-2 list-disc list-inside">
              <li>
                Engineered real-time multiplayer editing (WebSockets, OT/CRDT-inspired, WASM perf).
              </li>
              <li>Cut render latency 30%+ via Canvas pipeline and resource usage optimizations.</li>
              <li>Scaled perf testing to GPU-accelerated CI with robust profiling guardrails.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
