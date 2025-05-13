 window.onload = () => {
  generateCard();
  setInterval(generateCard, 10000);
};

window.generateCard = function () {
  const suits = [
    { symbol: "♥", class: "heart" },
    { symbol: "♦", class: "diamond" },
    { symbol: "♠", class: "spade" },
    { symbol: "♣", class: "club" },
  ];

  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");
  const cardValue = document.getElementById("card-value");
  const topLeft = document.getElementById("top-left");
  const bottomRight = document.getElementById("bottom-right");

  card.classList.remove("heart", "diamond", "spade", "club");
  card.classList.add(randomSuit.class);

  cardValue.innerHTML = randomValue;
  topLeft.innerHTML = randomSuit.symbol;
  bottomRight.innerHTML = randomSuit.symbol;
};
