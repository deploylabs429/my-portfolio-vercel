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
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold">Senior Software Engineer @ ProductNow</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                  Current
                </span>
              </div>
              <p className="text-[var(--muted)] text-sm">Oct 2025 – Present</p>
            </header>
            <ul className="text-[var(--muted)] text-sm space-y-2 list-disc list-inside">
              <li>
                Building an AI-native OS for product & engineering teams with a shared intelligence
                layer that stays current in real time.
              </li>
              <li>
                Developing agentic &ldquo;AI teammates&rdquo; to reduce coordination overhead across
                planning, handoffs, and delivery.
              </li>
              <li>
                Shipping features in a TypeScript monorepo (Next.js/NestJS); driving enterprise
                readiness with Auth0, Vanta, and SOC 2 Type II.
              </li>
            </ul>
          </article>
          <article className="glass-card p-6 rounded-2xl border border-[var(--border)]">
            <header className="mb-4">
              <h3 className="text-lg font-semibold">Senior Software Engineer @ FoxyAI</h3>
              <p className="text-[var(--muted)] text-sm">Dec 2023 – Sep 2025</p>
            </header>
            <ul className="text-[var(--muted)] text-sm space-y-2 list-disc list-inside">
              <li>
                Built Next.js/TypeScript dashboards for AI-powered property intelligence (scores,
                damage detection, valuations).
              </li>
              <li>
                Integrated multimodal LLM-powered search via RAG across large-scale property
                datasets.
              </li>
              <li>
                Implemented Stripe billing system (Checkout + customer portal) and led Page Router →
                App Router migration.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
