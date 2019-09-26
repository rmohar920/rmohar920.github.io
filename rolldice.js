function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

for (var i = 0; i < 100; i++) {
  console.log(rollDice());
}
