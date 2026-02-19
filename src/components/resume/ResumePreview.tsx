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
    <div className="overflow-auto max-h-[calc(100vh-12rem)] bg-muted/20 rounded-lg">
      <div className="transform scale-[0.6] origin-top-left w-[210mm]" id="resume-preview">
        <Template data={data} />
      </div>
    </div>
  );
};

export default ResumePreview;
