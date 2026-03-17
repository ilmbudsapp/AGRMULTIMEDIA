import { useLanguage } from "@/contexts/LanguageContext";

export default function FeaturedProjects() {
  const { tSpec } = useLanguage();
  const projects = tSpec.heroProjects.projects;

  return (
    <section className="py-16 sm:py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            {tSpec.heroProjects.heading}
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
            >
              <div className="h-32 sm:h-36 bg-gradient-to-r from-electric-blue/30 via-purple-500/30 to-pink-500/30" />
              <div className="p-6 sm:p-7">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3">
                  {project.description}
                </p>
                {project.result && (
                  <p className="text-xs sm:text-sm text-emerald-300/90 font-medium">
                    {project.result}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

