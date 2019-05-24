/* eslint-disable radix */
class GameService {
  constructor() {
    this.playSounds = JSON.parse(localStorage.getItem('playSounds')) || true;
    this.currentID = JSON.parse(localStorage.getItem('currentID')) || null;
    this.merchant = JSON.parse(localStorage.getItem('didMerchant')) || false;
    this.lossCause = 'En refusant la quête, vous condamnez tous les habitants du village à une mort certaine.';
    this.maxHealth = parseInt(localStorage.getItem('maxHealth')) || 999;
    this.gold = parseInt(localStorage.getItem('gold')) || 500;
    this.stats = JSON.parse(localStorage.getItem('stats')) || {
      'luck': 0,
      'power': 0,
      'agility': 0,
      'health': 0
    };
  }

  resetData() {
    this.merchant = false;
    this.maxHealth = 0;
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
    localStorage.setItem('playSounds', this.playSounds);
    localStorage.setItem('maxHealth', this.maxHealth);
    localStorage.setItem('currentID', this.currentID);
    localStorage.setItem('gold', this.gold);
    localStorage.setItem('stats', JSON.stringify(this.stats));
    localStorage.setItem('didMerchant', this.merchant);
  }
}

export default new GameService();
