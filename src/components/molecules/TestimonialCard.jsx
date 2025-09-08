import Card from "@/components/atoms/Card";

const TestimonialCard = ({ quote, highlight, author, role }) => {
  return (
    <Card hover className="h-full">
      <div className="flex flex-col h-full">
        <blockquote className="text-gray-700 text-lg leading-relaxed flex-1 mb-6">
          "{quote}"
          {highlight && (
            <span className="block mt-3 text-primary font-semibold italic">
              "{highlight}"
            </span>
          )}
        </blockquote>
        <footer className="border-t pt-4">
          <cite className="not-italic">
            <div className="font-semibold text-dark">{author}</div>
            <div className="text-muted text-sm">{role}</div>
          </cite>
        </footer>
      </div>
    </Card>
  );
};

export default TestimonialCard;