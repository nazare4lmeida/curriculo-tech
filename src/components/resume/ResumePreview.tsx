import { ResumeData, TemplateType } from "@/types/resume";
import MinimalTemplate from "./templates/MinimalTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import DarkTemplate from "./templates/DarkTemplate";

interface Props {
  data: ResumeData;
  template: TemplateType;
}

const templates: Record<TemplateType, React.FC<{ data: ResumeData }>> = {
  minimal: MinimalTemplate,
  modern: ModernTemplate,
  dark: DarkTemplate,
};

const ResumePreview = ({ data, template }: Props) => {
  const Template = templates[template];

  return (
    <div className="overflow-auto max-h-[calc(100vh-12rem)] bg-muted/20 rounded-lg p-4 flex justify-center">
      {/* ALTERAÇÃO: 
          1. Removido o 'transform scale-[0.6]' e 'origin-top-left' para não bugar o PDF.
          2. Adicionado 'bg-white', 'shadow-2xl' e 'text-left' para garantir o visual de papel.
          3. Mantido o ID 'resume-preview' e a largura 'w-[210mm]' para o html2pdf.
      */}
      <div 
        id="resume-preview" 
        className="w-[210mm] min-h-[297mm] bg-white text-black shadow-2xl mx-auto text-left"
      >
        <Template data={data} />
      </div>
    </div>
  );
};

export default ResumePreview;