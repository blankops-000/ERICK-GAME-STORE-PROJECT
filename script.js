const games = [
  {
    title: "Cyber Punk 2077",
    genre: "Action",
    rating: "4.8/5",
    image: "images/cyber.jpeg"
  },
  {
    title: "Call of Duty: Modern Warfare",
    genre: "Action",
    rating: "4.5/5",
    image: "images/cod.jpeg"
  },
  {
    title: "Last of Us ",
    genre: "Horror",
    rating: "4.6/5",
    image: "images/The Last of Us.jpeg"
  }
];

const gameList = document.getElementById("game-list");

games.forEach(game => {
  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <img src="${game.image}" alt="${game.title}">
    <h2>${game.title}</h2>
    <p class="genre">Genre: ${game.genre}</p>
    <p class="rating">Rating: ${game.rating}</p>
    <button class="buy-btn">Buy Now</button>
  `;

  gameList.appendChild(card);
});