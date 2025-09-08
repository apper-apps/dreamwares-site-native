import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { formatDistanceToNow } from "date-fns";
const BlogCard = ({ post, className = "" }) => {
  const handleReadMore = () => {
    // In a real implementation, this would navigate to the full post
    window.open(post.link || '#', '_blank');
  };

  return (
<Card className={`card-hover h-full bg-background border-gray-700 ${className}`}>
      {/* Category Badge */}
      <div className="mb-4">
<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.categoryColor} text-white`}>
          <ApperIcon name={post.categoryIcon} className="w-3 h-3 mr-1" />
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-primary transition-colors cursor-pointer" onClick={handleReadMore}>
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
        {post.description}
      </p>

      {/* Metadata */}
      <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
        <div className="flex items-center">
          <ApperIcon name="Calendar" className="w-4 h-4 mr-2" />
          <span>{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</span>
        </div>
        <div className="flex items-center">
          <ApperIcon name="Clock" className="w-4 h-4 mr-2" />
          <span>{post.readTime} min read</span>
        </div>
      </div>

      {/* Author */}
<div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-medium">{post.author.charAt(0)}</span>
        </div>
        <span className="text-gray-300 text-sm">by {post.author}</span>
      </div>

      {/* Read More Button */}
      <Button 
        variant="secondary" 
        className="w-full group"
        onClick={handleReadMore}
      >
        Read More
        <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Card>
  );
};

export default BlogCard;