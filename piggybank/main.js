import PiggyBank from "./piggybank.js"

const p1 = new PiggyBank;
p1.addCoins(0.25,4);
p1.addCoins(0.75,4);
p1.addCoins(10,10);
p1.addCoins(5,300);
p1.totalValue();