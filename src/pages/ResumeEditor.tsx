import { useState, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { ResumeData, TemplateType, emptyResume } from "@/types/resume";
import Navbar from "@/components/Navbar";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Save, FileText } from "lucide-react";

const templateLabels: Record<TemplateType, string> = {
  minimal: "Minimal Tech",
  modern: "Dev Modern",
  dark: "Dark Professional",
};

const ResumeEditor = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [data, setData] = useState<ResumeData>(emptyResume);
  const [template, setTemplate] = useState<TemplateType>("minimal");
  const [saving, setSaving] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    const html2pdf = (await import("html2pdf.js")).default;
    html2pdf()
      .set({
        margin: 0,
        filename: `curriculo-${data.fullName || "geracaotech"}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  const handleSave = async () => {
    if (!user) {
      toast({ title: "Faça login", description: "Entre na sua conta para salvar o currículo.", variant: "destructive" });
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from("resumes").insert({
        user_id: user.id,
        title: data.fullName ? `Currículo de ${data.fullName}` : "Meu Currículo",
        template,
        data: data as any,
      });
      if (error) throw error;
      toast({ title: "Salvo!", description: "Seu currículo foi salvo com sucesso." });
    } catch (e: any) {
      toast({ title: "Erro", description: e.message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      <div className="pt-20 px-4 pb-8">
        <div className="container max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold">Editor de Currículo</h1>
              <p className="text-sm text-muted-foreground">Preencha seus dados e veja o preview em tempo real</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Template selector */}
              <div className="flex gap-1 p-1 rounded-lg bg-muted/30 border border-border">
                {(Object.keys(templateLabels) as TemplateType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTemplate(t)}
                    className={`px-3 py-1.5 text-xs rounded-md transition-all ${
                      template === t ? "gradient-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {templateLabels[t]}
                  </button>
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={handleSave} disabled={saving}>
                <Save className="h-4 w-4 mr-1" /> {saving ? "Salvando..." : "Salvar"}
              </Button>
              <Button size="sm" className="gradient-primary border-0" onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-1" /> Baixar PDF
              </Button>
            </div>
          </div>

          {/* Editor layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border gradient-card overflow-hidden">
              <ResumeForm data={data} onChange={setData} />
            </div>
            <div className="rounded-2xl border border-border gradient-card overflow-hidden">
              <div className="p-4 border-b border-border flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Preview — {templateLabels[template]}</span>
              </div>
              <ResumePreview data={data} template={template} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;
