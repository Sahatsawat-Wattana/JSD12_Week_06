export default class PiggyBank {
  constructor() {
    this.coins = { 0.25: 0, 0.5: 0, 1: 0, 2: 0, 5: 0, 10: 0 };
    this.total = 0;
  }
  totalValue() {
    this.total = Object.entries(this.coins).reduce(
      (acc, [k, v]) => acc + parseFloat(k) * v,
      0,
    );
    console.log(`Your PiggyBank total value is ${this.total} baht`);
  }
  addCoins(value, n) {
    if (n > 100) {
      console.log("Sorry! PiggyBank cannot collect over 100 coins at a time");
    } else if (!Object.keys(this.coins).includes(String(value))) {
      console.log("Sorry! PiggyBank cannot collect invalid coin");
    } else {
      this.coins[value] += n;
      console.log(`Thank you for adding ${value} baht ${n} coins`);
      this.totalValue();
    }
  }
}
