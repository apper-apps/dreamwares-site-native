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
<section id="blog" ref={sectionRef} className="py-24 bg-gradient-to-br from-deep-space via-void-black to-cyber-dark relative">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-radial from-electric-blue/10 via-transparent to-neon-purple/10 animate-pulse"></div>
      
      <Container>
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll stagger-1 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 cyber-text-glow">
            Latest{" "}
            <span className="bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent animate-gradient cyber-text-pulse">
              Insights
            </span>
          </h2>
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 blur-3xl animate-pulse -z-10"></div>
          <p className="text-2xl text-cyber-silver max-w-4xl mx-auto mb-10 cyber-text-subtle">
            Discover our latest thoughts on product development, industry trends, and technical insights
          </p>
        </div>

        {/* Blog Cards Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {posts.map((post, index) => (
              <div
                key={post.Id}
                className={`animate-on-scroll stagger-${index + 2} cyber-blog-card-wrapper`}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 relative">
            <div className="absolute inset-0 bg-gradient-radial from-electric-blue/5 via-transparent to-transparent animate-pulse"></div>
            <ApperIcon name="FileText" className="w-20 h-20 text-electric-blue/60 mx-auto mb-6 animate-pulse" />
            <p className="text-cyber-silver text-xl cyber-text-subtle">No blog posts available at the moment.</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center animate-on-scroll stagger-5">
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleViewAll}
            className="group cyber-button-secondary relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View All Posts
              <ApperIcon name="ArrowRight" className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 animate-pulse"></div>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;