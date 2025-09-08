import { useEffect, useRef, useState } from 'react';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import BlogCard from '@/components/molecules/BlogCard';
import ApperIcon from '@/components/ApperIcon';
import { blogService } from '@/services/api/blogService';

const BlogSection = () => {
  const sectionRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const allPosts = await blogService.getAll();
        // Show only the 3 most recent posts for preview
        setPosts(allPosts.slice(0, 3));
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [posts]);

  const handleViewAll = () => {
    window.location.href = '/blog';
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-background">
        <Container>
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-surface rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-surface rounded w-96 mx-auto"></div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-background">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll stagger-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our latest thoughts on product development, industry trends, and technical insights
          </p>
        </div>

        {/* Blog Cards Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post, index) => (
              <div
                key={post.Id}
                className={`animate-on-scroll stagger-${index + 2}`}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <ApperIcon name="FileText" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No blog posts available at the moment.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center animate-on-scroll stagger-5">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleViewAll}
            className="group"
          >
            View All Posts
            <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;