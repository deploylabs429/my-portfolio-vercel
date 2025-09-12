import { MdPalette } from 'react-icons/md';

export interface ProficiencyItem {
  name: string;
  color: string; // Tailwind gradient classes
  level: number; // 0-100
}

interface ProficiencyGridProps {
  levels: ReadonlyArray<ProficiencyItem>;
}

const ProficiencyGrid = ({ levels }: ProficiencyGridProps) => {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-6">Proficiency Levels</h2>
          <p className="text-[var(--muted)] text-lg">
            Expertise across different technology domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-2xl border border-[var(--border)] text-center group hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <MdPalette className="w-8 h-8 on-gradient" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">{skill.name}</h3>

              {/* Progress Bar */}
              <div className="w-full bg-[var(--glass-bg)] rounded-full h-2 mb-2">
                <div
                  className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="text-2xl font-bold gradient-text">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProficiencyGrid;
