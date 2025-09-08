import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "No data found", 
  description = "There's nothing here yet", 
  action,
  actionLabel = "Get Started"
}) => {
  return (
<div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="text-center max-w-md">
<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
<ApperIcon name="Database" className="w-8 h-8 text-primary" />
        </div>
<h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
<p className="text-gray-300 mb-6">{description}</p>
        {action && (
<Button onClick={action} className="btn-primary">
            <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Empty;