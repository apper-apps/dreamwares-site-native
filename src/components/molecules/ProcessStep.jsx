import Card from "@/components/atoms/Card";

const ProcessStep = ({ number, title, description, isLast = false }) => {
  return (
    <div className={`relative ${!isLast ? 'process-line' : ''}`}>
      <Card hover className="text-center h-full">
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold text-dark mb-3">{title}</h3>
        <p className="text-muted leading-relaxed">{description}</p>
      </Card>
    </div>
  );
};

export default ProcessStep;