class GameService {
  constructor() {
    this.health = localStorage.getItem('health') || 100;
    this.gold = localStorage.getItem('gold') || 500;
    this.stats = JSON.parse(localStorage.getItem('stats')) || {
      'luck': 999,
      'power': 999,
      'speed': 999,
      'armor': 999
    };
  }

  save() {
    localStorage.setItem('health', this.health);
    localStorage.setItem('gold', this.gold);
    localStorage.setItem('stats', JSON.stringify(this.stats));
  }
}

export default new GameService();
