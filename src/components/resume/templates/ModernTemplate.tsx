import { ResumeData } from "@/types/resume";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

const ModernTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-white text-gray-900 min-h-[297mm] w-full flex" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
    {/* Sidebar */}
    <div className="w-1/3 bg-gradient-to-b from-teal-700 to-teal-900 text-white p-6">
      <div className="mb-6">
        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-3">
          {(data.fullName || "N").charAt(0)}
        </div>
        <h1 className="text-xl font-bold">{data.fullName || "Seu Nome"}</h1>
        <p className="text-teal-200 text-sm mt-1">{data.title || "Título"}</p>
      </div>

      {/* Contact */}
      <div className="space-y-2 text-xs mb-6">
        {data.email && <div className="flex items-center gap-2"><Mail className="h-3 w-3 text-teal-300" /><span>{data.email}</span></div>}
        {data.phone && <div className="flex items-center gap-2"><Phone className="h-3 w-3 text-teal-300" /><span>{data.phone}</span></div>}
        {data.github && <div className="flex items-center gap-2"><Github className="h-3 w-3 text-teal-300" /><span>{data.github}</span></div>}
        {data.linkedin && <div className="flex items-center gap-2"><Linkedin className="h-3 w-3 text-teal-300" /><span>{data.linkedin}</span></div>}
        {data.portfolio && <div className="flex items-center gap-2"><Globe className="h-3 w-3 text-teal-300" /><span>{data.portfolio}</span></div>}
      </div>

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">Habilidades</h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((s) => (
              <span key={s} className="px-2 py-0.5 bg-white/15 text-xs rounded text-teal-100">{s}</span>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-1 text-xs">
        <p><span className="text-teal-300">Stack:</span> {data.stack}</p>
        <p><span className="text-teal-300">Inglês:</span> {data.englishLevel}</p>
      </div>

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">Certificações</h2>
          <ul className="text-xs space-y-1 text-teal-100">
            {data.certifications.map((c, i) => <li key={i}>• {c}</li>)}
          </ul>
        </div>
      )}
    </div>

    {/* Main Content */}
    <div className="flex-1 p-6">
      {data.summary && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-2 border-b border-teal-100 pb-1">Resumo</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-2 border-b border-teal-100 pb-1">Experiência</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3 pl-3 border-l-2 border-teal-200">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm">{exp.role}</h3>
                <span className="text-xs text-gray-400">{exp.period}</span>
              </div>
              <p className="text-xs text-teal-700 font-medium">{exp.company}</p>
              {exp.description && <p className="text-xs text-gray-600 mt-1">{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {data.projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-2 border-b border-teal-100 pb-1">Projetos</h2>
          {data.projects.map((p, i) => (
            <div key={i} className="mb-3 pl-3 border-l-2 border-teal-200">
              <h3 className="font-semibold text-sm">{p.name} <span className="text-xs text-gray-400 font-normal">— {p.tech}</span></h3>
              {p.description && <p className="text-xs text-gray-600 mt-1">{p.description}</p>}
              {p.link && <p className="text-xs text-teal-600 mt-1">{p.link}</p>}
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-teal-700 mb-2 border-b border-teal-100 pb-1">Formação</h2>
          {data.education.map((e, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-sm">{e.course}</h3>
                <span className="text-xs text-gray-400">{e.period}</span>
              </div>
              <p className="text-xs text-gray-600">{e.institution}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  </div>
);

export default ModernTemplate;
