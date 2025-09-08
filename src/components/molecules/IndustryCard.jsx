import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const IndustryCard = ({ name, description, icon }) => {
  return (
    <Card hover className="text-center h-full">
      <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <ApperIcon name={icon} className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-dark mb-3">{name}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </Card>
  );
};

export default IndustryCard;