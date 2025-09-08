import navigationData from "@/services/mockData/navigation.json";

class NavigationService {
  constructor() {
    this.data = [...navigationData];
  }

  async delay(ms = 300) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getAll() {
    await this.delay();
    return [...this.data];
  }

  async getById(id) {
    await this.delay();
    const item = this.data.find(nav => nav.Id === parseInt(id));
    if (!item) {
      throw new Error(`Navigation item with id ${id} not found`);
    }
    return { ...item };
  }

  async update(id, updates) {
    await this.delay();
    const index = this.data.findIndex(nav => nav.Id === parseInt(id));
    if (index === -1) {
      throw new Error(`Navigation item with id ${id} not found`);
    }
    
    this.data[index] = { ...this.data[index], ...updates };
    return { ...this.data[index] };
  }
}

export default new NavigationService();