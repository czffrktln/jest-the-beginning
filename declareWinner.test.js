const declareWinner = require('./declareWinner')

const fighter1 = {name: "Renton", health: 100, damagePerAttack: 5}
const fighter2 = {name: "Spud", health: 30, damagePerAttack: 10}
const fighter3 = {name: "Sick Boy", health: 60, damagePerAttack: 20}
const fighter4 = {name: "Tommy", health: 90, damagePerAttack: 20}
const fighter5 = {name: "Begbie", health: 70, damagePerAttack: 10}


test('Renton vs Spud', () => {
  expect(declareWinner(fighter1, fighter2, "Spud")).toBe("Renton");
});

test('Sick Boy vs Tommy', () => {
  expect(declareWinner(fighter3, fighter4, "Sick Boy")).toBe("Tommy");
});

test('Sick Boy vs Tommy', () => {
  expect(declareWinner(fighter1, fighter5, "Renton")).toBe("Begbie");
});

