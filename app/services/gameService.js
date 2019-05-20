/* eslint-disable radix */
class GameService {
  constructor() {
    this.maxHealth = localStorage.getItem('maxHealth') || 999;
    this.gold = localStorage.getItem('gold') || 500;
    this.stats = JSON.parse(localStorage.getItem('stats')) || {
      'luck': 0,
      'power': 0,
      'agility': 0,
      'health': 0
    };
  }

  resetData() {
    this.maxHealth = 999;
    this.gold = 500;
    this.stats = {
      'luck': 0,
      'power': 0,
      'agility': 0,
      'health': 0
    };
    this.save();
  }

  save() {
    localStorage.setItem('maxHealth', this.maxHealth);
    localStorage.setItem('gold', this.gold);
    localStorage.setItem('stats', JSON.stringify(this.stats));
  }
}

export default new GameService();
