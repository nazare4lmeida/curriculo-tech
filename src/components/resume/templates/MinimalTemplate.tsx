import { ResumeData } from "@/types/resume";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

const MinimalTemplate = ({ data }: { data: ResumeData }) => (
  <div className="bg-white text-gray-900 p-8 min-h-[297mm] w-full" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
    {/* Header */}
    <div className="border-b-2 border-gray-200 pb-4 mb-6">
      <h1 className="text-3xl font-bold text-gray-900">{data.fullName || "Seu Nome"}</h1>
      <p className="text-lg text-teal-700 font-medium mt-1">{data.title || "Título Profissional"}</p>
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
        {data.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{data.email}</span>}
        {data.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{data.phone}</span>}
        {data.github && <span className="flex items-center gap-1"><Github className="h-3 w-3" />{data.github}</span>}
        {data.linkedin && <span className="flex items-center gap-1"><Linkedin className="h-3 w-3" />{data.linkedin}</span>}
        {data.portfolio && <span className="flex items-center gap-1"><Globe className="h-3 w-3" />{data.portfolio}</span>}
      </div>
    </div>

    {/* Summary */}
    {data.summary && (
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Resumo</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
      </section>
    )}

    {/* Skills */}
    {data.skills.length > 0 && (
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Habilidades</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <span key={s} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">{s}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-2 text-xs text-gray-500">
          <span>Stack: {data.stack}</span>
          <span>Inglês: {data.englishLevel}</span>
        </div>
      </section>
    )}

    {/* Experience */}
    {data.experience.length > 0 && (
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Experiência</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-sm">{exp.role}</h3>
              <span className="text-xs text-gray-500">{exp.period}</span>
            </div>
            <p className="text-xs text-teal-700 font-medium">{exp.company}</p>
            {exp.description && <p className="text-xs text-gray-600 mt-1">{exp.description}</p>}
          </div>
        ))}
      </section>
    )}

    {/* Projects */}
    {data.projects.length > 0 && (
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Projetos</h2>
        {data.projects.map((p, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-sm">{p.name}</h3>
              <span className="text-xs text-gray-500">{p.tech}</span>
            </div>
            {p.description && <p className="text-xs text-gray-600 mt-1">{p.description}</p>}
            {p.link && <p className="text-xs text-teal-600 mt-1">{p.link}</p>}
          </div>
        ))}
      </section>
    )}

    {/* Education */}
    {data.education.length > 0 && (
      <section className="mb-5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Formação</h2>
        {data.education.map((e, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-semibold text-sm">{e.course}</h3>
              <span className="text-xs text-gray-500">{e.period}</span>
            </div>
            <p className="text-xs text-gray-600">{e.institution}</p>
          </div>
        ))}
      </section>
    )}

    {/* Certifications */}
    {data.certifications.length > 0 && (
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Certificações</h2>
        <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
          {data.certifications.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>
    )}
  </div>
);

export default MinimalTemplate;
