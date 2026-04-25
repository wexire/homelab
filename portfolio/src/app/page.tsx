import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 space-y-20">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-white">{profile.name}</h1>
        <p className="text-sky-400 text-lg">{profile.title}</p>
        <p className="text-zinc-400 leading-relaxed">{profile.bio}</p>
        <div className="flex gap-4 pt-2">
          <a
            href={profile.github}
            target="_blank"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Email ↗
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full border border-zinc-800 text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Experience
        </h2>
        <div className="space-y-6">
          {profile.experience.map((job) => (
            <div key={job.company}>
              <div className="flex justify-between items-baseline">
                <span className="text-white font-medium">{job.role}</span>
                <span className="text-sm text-zinc-500">{job.period}</span>
              </div>
              <p className="text-sky-400 text-sm">{job.company}</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                {job.description.map((item, i) => (
                  <li key={i} className="text-zinc-400 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Projects
        </h2>
        <div className="space-y-4">
          {profile.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              className="block p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors group"
            >
              <div className="flex justify-between items-center">
                <span className="text-white font-medium group-hover:text-sky-400 transition-colors">
                  {project.name}
                </span>
                <span className="text-zinc-600 text-sm">↗</span>
              </div>
              <p className="text-zinc-400 text-sm mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-zinc-500 border border-zinc-800 rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
