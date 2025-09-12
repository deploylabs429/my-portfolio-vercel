import { MdChat } from 'react-icons/md';

const ContactHero = () => {
  return (
    <section className="relative py-20 text-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center gradient-bg">
            <MdChat className="w-6 h-6 on-gradient" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Let&apos;s Connect</h1>
        </div>

        <p className="text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
          Ready to start a conversation? Whether you have a project in mind, want to discuss
          opportunities, or just want to say hello - I&apos;d love to hear from you.
        </p>
        <div className="mt-4 flex justify-center">
          <span
            aria-label="Open to remote work"
            className="text-xs md:text-sm text-[var(--muted)] bg-[var(--glass-bg)] px-3 py-1 rounded-full border border-[var(--glass-border)]"
          >
            Open to remote work
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
