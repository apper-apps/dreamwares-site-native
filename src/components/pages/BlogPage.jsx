import { useState, useEffect } from 'react';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Container from '@/components/atoms/Container';
import Button from '@/components/atoms/Button';
import BlogCard from '@/components/molecules/BlogCard';
import ApperIcon from '@/components/ApperIcon';
import { blogService } from '@/services/api/blogService';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Technology', 'Development', 'Design', 'Architecture', 'Business'];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const allPosts = await blogService.getAll();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    let filtered = [...posts];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-deep-space via-void-black to-cyber-dark relative">
      {/* Futuristic Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-15 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-radial from-electric-blue/5 via-transparent to-neon-purple/5 animate-pulse pointer-events-none"></div>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
<section className="py-24 bg-gradient-to-br from-void-black/50 via-cyber-dark to-deep-space relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <Container>
            <div className="text-center mb-16 relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 cyber-text-glow">
                Our{" "}
                <span className="bg-gradient-to-r from-electric-blue via-neon-cyan to-holographic-purple bg-clip-text text-transparent animate-gradient cyber-text-pulse">
                  Blog
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 blur-3xl animate-pulse -z-10"></div>
              <p className="text-2xl text-cyber-silver max-w-4xl mx-auto cyber-text-subtle">
                Insights, tutorials, and thought leadership from our team of experts
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
{/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <ApperIcon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-electric-blue animate-pulse" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-6 py-4 bg-void-black/80 border border-electric-blue/30 rounded-lg text-white placeholder-cyber-silver focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 cyber-input"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-electric-blue/5 to-transparent opacity-0 focus-within:opacity-100 animate-pulse pointer-events-none"></div>
              </div>

              {/* Category Filters */}
<div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryFilter(category)}
                    className={`text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category 
                        ? "cyber-button-active bg-gradient-to-r from-electric-blue to-neon-cyan border-0" 
                        : "cyber-button-outline border-electric-blue/30 text-cyber-silver hover:border-electric-blue hover:text-electric-blue"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <Container>
            {loading ? (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse cyber-loading-card">
                    <div className="h-72 bg-gradient-to-br from-void-black/80 to-cyber-dark/80 rounded-xl mb-6 border border-electric-blue/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 animate-pulse"></div>
                    </div>
                    <div className="h-5 bg-gradient-to-r from-electric-blue/20 to-neon-cyan/20 rounded-lg w-3/4 mb-3"></div>
                    <div className="h-4 bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10 rounded-lg w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <>
<div className="mb-10">
                  <p className="text-cyber-silver text-lg cyber-text-subtle">
                    <span className="inline-block w-2 h-2 bg-electric-blue rounded-full mr-2 animate-pulse"></span>
                    Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    {searchTerm && ` for "${searchTerm}"`}
                    <span className="inline-block w-2 h-2 bg-neon-cyan rounded-full ml-2 animate-pulse"></span>
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredPosts.map((post) => (
                    <div key={post.Id} className="cyber-blog-card-wrapper">
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              </>
            ) : (
<div className="text-center py-24 relative">
                <div className="absolute inset-0 bg-gradient-radial from-electric-blue/5 via-transparent to-transparent animate-pulse"></div>
                <ApperIcon name="FileText" className="w-20 h-20 text-electric-blue/60 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl text-white mb-4 cyber-text-glow">No articles found</h3>
                <p className="text-cyber-silver text-lg mb-8 cyber-text-subtle">
                  {searchTerm || selectedCategory !== 'All'
                    ? 'Try adjusting your search or filter criteria.'
                    : 'No blog posts are available at the moment.'}
                </p>
                {(searchTerm || selectedCategory !== 'All') && (
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="cyber-button-secondary"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;