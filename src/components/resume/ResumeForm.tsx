import { ResumeData, ExperienceItem, ProjectItem, EducationItem } from "@/types/resume";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Trash2 } from "lucide-react";
import { useState } from "react";

interface Props {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm = ({ data, onChange }: Props) => {
  const [skillInput, setSkillInput] = useState("");
  const [certInput, setCertInput] = useState("");

  const update = (field: keyof ResumeData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addSkill = () => {
    if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
      update("skills", [...data.skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    update("skills", data.skills.filter((s) => s !== skill));
  };

  const addCert = () => {
    if (certInput.trim()) {
      update("certifications", [...data.certifications, certInput.trim()]);
      setCertInput("");
    }
  };

  const addExperience = () => {
    update("experience", [...data.experience, { company: "", role: "", period: "", description: "" }]);
  };

  const updateExperience = (idx: number, field: keyof ExperienceItem, value: string) => {
    const updated = [...data.experience];
    updated[idx] = { ...updated[idx], [field]: value };
    update("experience", updated);
  };

  const removeExperience = (idx: number) => {
    update("experience", data.experience.filter((_, i) => i !== idx));
  };

  const addProject = () => {
    update("projects", [...data.projects, { name: "", description: "", tech: "", link: "" }]);
  };

  const updateProject = (idx: number, field: keyof ProjectItem, value: string) => {
    const updated = [...data.projects];
    updated[idx] = { ...updated[idx], [field]: value };
    update("projects", updated);
  };

  const removeProject = (idx: number) => {
    update("projects", data.projects.filter((_, i) => i !== idx));
  };

  const addEducation = () => {
    update("education", [...data.education, { institution: "", course: "", period: "" }]);
  };

  const updateEducation = (idx: number, field: keyof EducationItem, value: string) => {
    const updated = [...data.education];
    updated[idx] = { ...updated[idx], [field]: value };
    update("education", updated);
  };

  const removeEducation = (idx: number) => {
    update("education", data.education.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6 p-6 overflow-y-auto max-h-[calc(100vh-12rem)]">
      {/* Informações Pessoais */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gradient">Informações Pessoais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label>Nome completo</Label>
            <Input value={data.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="João Silva" className="mt-1" />
          </div>
          <div>
            <Label>Título profissional</Label>
            <Input value={data.title} onChange={(e) => update("title", e.target.value)} placeholder="Desenvolvedor Full Stack" className="mt-1" />
          </div>
          <div>
            <Label>Email</Label>
            <Input value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="joao@email.com" className="mt-1" />
          </div>
          <div>
            <Label>Telefone</Label>
            <Input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(11) 99999-9999" className="mt-1" />
          </div>
        </div>
        <div>
          <Label>Resumo profissional</Label>
          <Textarea value={data.summary} onChange={(e) => update("summary", e.target.value)} placeholder="Breve resumo sobre você e seus objetivos..." className="mt-1" rows={3} />
        </div>
      </section>

      {/* Stack e Links */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gradient">Stack e Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Label>Stack principal</Label>
            <Select value={data.stack} onValueChange={(v) => update("stack", v)}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Front-end">Front-end</SelectItem>
                <SelectItem value="Back-end">Back-end</SelectItem>
                <SelectItem value="Full Stack">Full Stack</SelectItem>
                <SelectItem value="IA">IA / Machine Learning</SelectItem>
                <SelectItem value="Dados">Dados</SelectItem>
                <SelectItem value="Mobile">Mobile</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Nível de inglês</Label>
            <Select value={data.englishLevel} onValueChange={(v) => update("englishLevel", v)}>
              <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Básico">Básico</SelectItem>
                <SelectItem value="Intermediário">Intermediário</SelectItem>
                <SelectItem value="Avançado">Avançado</SelectItem>
                <SelectItem value="Fluente">Fluente</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>GitHub</Label>
            <Input value={data.github} onChange={(e) => update("github", e.target.value)} placeholder="github.com/usuario" className="mt-1" />
          </div>
          <div>
            <Label>LinkedIn</Label>
            <Input value={data.linkedin} onChange={(e) => update("linkedin", e.target.value)} placeholder="linkedin.com/in/usuario" className="mt-1" />
          </div>
          <div className="md:col-span-2">
            <Label>Portfólio</Label>
            <Input value={data.portfolio} onChange={(e) => update("portfolio", e.target.value)} placeholder="meuportfolio.com" className="mt-1" />
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gradient">Habilidades Técnicas</h3>
        <div className="flex gap-2">
          <Input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Ex: React, TypeScript..." onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())} />
          <Button type="button" size="icon" variant="secondary" onClick={addSkill}><Plus className="h-4 w-4" /></Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((s) => (
            <Badge key={s} variant="secondary" className="gap-1 cursor-pointer" onClick={() => removeSkill(s)}>
              {s} <X className="h-3 w-3" />
            </Badge>
          ))}
        </div>
      </section>

      {/* Experiência */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gradient">Experiência</h3>
          <Button type="button" variant="secondary" size="sm" onClick={addExperience}><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
        </div>
        {data.experience.map((exp, i) => (
          <div key={i} className="p-4 rounded-lg border border-border bg-muted/30 space-y-2 relative">
            <button onClick={() => removeExperience(i)} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            <div className="grid grid-cols-2 gap-2">
              <Input value={exp.company} onChange={(e) => updateExperience(i, "company", e.target.value)} placeholder="Empresa" />
              <Input value={exp.role} onChange={(e) => updateExperience(i, "role", e.target.value)} placeholder="Cargo" />
            </div>
            <Input value={exp.period} onChange={(e) => updateExperience(i, "period", e.target.value)} placeholder="Jan 2023 - Atual" />
            <Textarea value={exp.description} onChange={(e) => updateExperience(i, "description", e.target.value)} placeholder="Descrição das atividades..." rows={2} />
          </div>
        ))}
      </section>

      {/* Projetos */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gradient">Projetos</h3>
          <Button type="button" variant="secondary" size="sm" onClick={addProject}><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
        </div>
        {data.projects.map((proj, i) => (
          <div key={i} className="p-4 rounded-lg border border-border bg-muted/30 space-y-2 relative">
            <button onClick={() => removeProject(i)} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            <div className="grid grid-cols-2 gap-2">
              <Input value={proj.name} onChange={(e) => updateProject(i, "name", e.target.value)} placeholder="Nome do projeto" />
              <Input value={proj.tech} onChange={(e) => updateProject(i, "tech", e.target.value)} placeholder="Tecnologias" />
            </div>
            <Input value={proj.link} onChange={(e) => updateProject(i, "link", e.target.value)} placeholder="Link do projeto" />
            <Textarea value={proj.description} onChange={(e) => updateProject(i, "description", e.target.value)} placeholder="Descrição..." rows={2} />
          </div>
        ))}
      </section>

      {/* Formação */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gradient">Formação</h3>
          <Button type="button" variant="secondary" size="sm" onClick={addEducation}><Plus className="h-4 w-4 mr-1" /> Adicionar</Button>
        </div>
        {data.education.map((edu, i) => (
          <div key={i} className="p-4 rounded-lg border border-border bg-muted/30 space-y-2 relative">
            <button onClick={() => removeEducation(i)} className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
            <Input value={edu.institution} onChange={(e) => updateEducation(i, "institution", e.target.value)} placeholder="Instituição" />
            <Input value={edu.course} onChange={(e) => updateEducation(i, "course", e.target.value)} placeholder="Curso" />
            <Input value={edu.period} onChange={(e) => updateEducation(i, "period", e.target.value)} placeholder="2020 - 2024" />
          </div>
        ))}
      </section>

      {/* Certificações */}
      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-gradient">Certificações</h3>
        <div className="flex gap-2">
          <Input value={certInput} onChange={(e) => setCertInput(e.target.value)} placeholder="Ex: AWS Cloud Practitioner" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addCert())} />
          <Button type="button" size="icon" variant="secondary" onClick={addCert}><Plus className="h-4 w-4" /></Button>
        </div>
        <div className="space-y-1">
          {data.certifications.map((c, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/30">
              <span className="text-sm">{c}</span>
              <button onClick={() => update("certifications", data.certifications.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-destructive"><X className="h-3 w-3" /></button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeForm;
