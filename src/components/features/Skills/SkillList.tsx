import type { ReactNode } from 'react';

interface SkillListProps {
  icon: ReactNode;
  title: string;
  gradient: string;
  skills: readonly string[];
}

const SkillList: React.FC<SkillListProps> = ({ icon, title, gradient, skills }) => (
  <div className="glass-card p-8 rounded-3xl border border-[var(--border)] shadow-2xl hover:border-[var(--border-strong)] transition-all duration-500 group hover:scale-[1.02] interactive-card h-full">
    {/* Header with Icon */}
    <div className="text-center mb-8">
      <div
        className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <div className="on-gradient">{icon}</div>
      </div>

      <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
        {title}
      </h3>

      {/* Animated underline */}
      <div
        className={`w-16 h-1 bg-gradient-to-r ${gradient} rounded-full mx-auto group-hover:w-24 transition-all duration-300`}
      ></div>
    </div>

    {/* Skills List */}
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className="group/skill animate-slide-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[var(--glass-bg)] transition-all duration-300 group-hover/skill:bg-[var(--glass-bg)]">
            {/* Animated bullet point */}
            <div className="relative mt-2 flex-shrink-0">
              <div
                className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full group-hover/skill:scale-150 transition-transform duration-300`}
              ></div>
              <div
                className={`absolute inset-0 w-2 h-2 bg-gradient-to-r ${gradient} rounded-full opacity-50 group-hover/skill:scale-200 transition-transform duration-300`}
              ></div>
            </div>

            <p className="text-[var(--muted)] leading-relaxed group-hover/skill:text-[var(--foreground)] transition-colors duration-300 text-sm">
              {skill}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Hover effect overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`}
    ></div>

    {/* Floating particles effect */}
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      <div
        className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-500`}
      ></div>
      <div
        className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-500`}
        style={{ animationDelay: '0.5s' }}
      ></div>
      <div
        className={`absolute top-1/2 left-2 w-1.5 h-1.5 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-pulse transition-all duration-500`}
        style={{ animationDelay: '1s' }}
      ></div>
    </div>
  </div>
);

export default SkillList;
