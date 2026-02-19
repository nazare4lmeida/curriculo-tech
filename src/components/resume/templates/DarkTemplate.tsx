import { ResumeData } from "@/types/resume";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

const DarkTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-gray-900 text-gray-100 p-8 min-h-[297mm] w-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
    {/* Header */}
    <div className="text-center border-b border-gray-700 pb-5 mb-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
        {data.fullName || "Seu Nome"}
      </h1>
      <p className="text-sm text-teal-400 font-medium mt-1 uppercase tracking-wider">{data.title || "Título Profissional"}</p>
      <div className="flex flex-wrap justify-center gap-4 mt-3 text-xs text-gray-400">
        {data.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{data.email}</span>}
        {data.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{data.phone}</span>}
        {data.github && <span className="flex items-center gap-1"><Github className="h-3 w-3" />{data.github}</span>}
        {data.linkedin && <span className="flex items-center gap-1"><Linkedin className="h-3 w-3" />{data.linkedin}</span>}
        {data.portfolio && <span className="flex items-center gap-1"><Globe className="h-3 w-3" />{data.portfolio}</span>}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="col-span-1 space-y-5">
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Skills</h2>
            <div className="space-y-1">
              {data.skills.map((s) => (
                <div key={s} className="px-2 py-1 bg-gray-800 text-xs rounded border border-gray-700">{s}</div>
              ))}
            </div>
          </section>
        )}

        <div className="space-y-1 text-xs text-gray-400">
          <p><span className="text-teal-400">Stack:</span> {data.stack}</p>
          <p><span className="text-teal-400">Inglês:</span> {data.englishLevel}</p>
        </div>

        {data.certifications.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Certificações</h2>
            <ul className="text-xs text-gray-300 space-y-1">
              {data.certifications.map((c, i) => <li key={i} className="flex items-start gap-1"><span className="text-teal-400 mt-0.5">▸</span>{c}</li>)}
            </ul>
          </section>
        )}

        {data.education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Formação</h2>
            {data.education.map((e, i) => (
              <div key={i} className="mb-2">
                <h3 className="text-xs font-semibold">{e.course}</h3>
                <p className="text-xs text-gray-400">{e.institution}</p>
                <p className="text-xs text-gray-500">{e.period}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Right Column */}
      <div className="col-span-2 space-y-5">
        {data.summary && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Sobre</h2>
            <p className="text-sm text-gray-300 leading-relaxed">{data.summary}</p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Experiência</h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-3 pl-3 border-l border-teal-700">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-sm">{exp.role}</h3>
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>
                <p className="text-xs text-teal-400">{exp.company}</p>
                {exp.description && <p className="text-xs text-gray-400 mt-1">{exp.description}</p>}
              </div>
            ))}
          </section>
        )}

        {data.projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-2">Projetos</h2>
            {data.projects.map((p, i) => (
              <div key={i} className="mb-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-sm">{p.name}</h3>
                <p className="text-xs text-teal-400">{p.tech}</p>
                {p.description && <p className="text-xs text-gray-400 mt-1">{p.description}</p>}
                {p.link && <p className="text-xs text-cyan-400 mt-1">{p.link}</p>}
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  </div>
);

export default DarkTemplate;
