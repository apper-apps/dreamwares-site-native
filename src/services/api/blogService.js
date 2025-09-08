import blogData from '@/services/mockData/blog.json';

// Utility function to simulate API delay
async function delay(ms = 300) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class BlogService {
  constructor() {
    this.data = [...blogData];
  }

  async getAll() {
    await delay();
    // Return posts sorted by publication date (newest first)
    return [...this.data].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  async getById(id) {
    await delay();
    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      throw new Error('Invalid ID format. Expected integer.');
    }
    
    const post = this.data.find(item => item.Id === numericId);
    if (!post) {
      throw new Error(`Blog post with ID ${numericId} not found`);
    }
    return { ...post };
  }

  async getByCategory(category) {
    await delay();
    return this.data
      .filter(post => post.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  async getFeatured() {
    await delay();
    return this.data
      .filter(post => post.featured)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  async search(query) {
    await delay();
    const searchTerm = query.toLowerCase();
    return this.data
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  }

  async create(postData) {
    await delay();
    const newId = Math.max(...this.data.map(p => p.Id)) + 1;
    const newPost = {
      Id: newId,
      title: postData.title,
      description: postData.description,
      content: postData.content,
      category: postData.category,
      categoryIcon: postData.categoryIcon || 'FileText',
      categoryColor: postData.categoryColor || 'from-primary to-secondary',
      author: postData.author,
      publishedAt: new Date().toISOString(),
      readTime: postData.readTime || 5,
      featured: postData.featured || false,
      tags: postData.tags || [],
      link: postData.link || '#'
    };
    
    this.data.push(newPost);
    return { ...newPost };
  }

  async update(id, updates) {
    await delay();
    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      throw new Error('Invalid ID format. Expected integer.');
    }

    const index = this.data.findIndex(post => post.Id === numericId);
    if (index === -1) {
      throw new Error(`Blog post with ID ${numericId} not found`);
    }

    this.data[index] = {
      ...this.data[index],
      ...updates,
      Id: numericId // Ensure ID cannot be changed
    };

    return { ...this.data[index] };
  }

  async delete(id) {
    await delay();
    const numericId = parseInt(id);
    if (isNaN(numericId)) {
      throw new Error('Invalid ID format. Expected integer.');
    }

    const index = this.data.findIndex(post => post.Id === numericId);
    if (index === -1) {
      throw new Error(`Blog post with ID ${numericId} not found`);
    }

    const deletedPost = { ...this.data[index] };
    this.data.splice(index, 1);
    return deletedPost;
  }
}

export const blogService = new BlogService();
export default blogService;