class GameService {
  constructor() {
    this.count = localStorage.getItem('count') ? localStorage.getItem('count') : 0;
  }
  increment(quantity) {
    this.count += quantity;
    localStorage.setItem('count', this.count);
  }
  value() {
    return this.count;
  }
}

export default new GameService();