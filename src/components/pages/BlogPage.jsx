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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-surface">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Insights, tutorials, and thought leadership from our team of experts
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <ApperIcon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "primary" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryFilter(category)}
                    className="text-sm"
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-64 bg-surface rounded-lg mb-4"></div>
                    <div className="h-4 bg-surface rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-surface rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <>
                <div className="mb-8">
                  <p className="text-gray-400">
                    Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.Id} post={post} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <ApperIcon name="FileText" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl text-white mb-2">No articles found</h3>
                <p className="text-gray-400 mb-6">
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