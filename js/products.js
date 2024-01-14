const tabs = document.querySelectorAll(".products__tab");
const tabsContainer = document.querySelector(".products__tab--container");
const tabsContent = document.querySelectorAll(".products__content");

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.products__tab`);

  // Guard class
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove(`products__tab--active`));
  tabsContent.forEach((c) => c.classList.remove(`products__content--active`));

  // Activate tab
  clicked.classList.add(`products__tab--active`);

  // Active content area
  document
    .querySelector(`.products__content--${clicked.dataset.tab}`)
    .classList.add(`products__content--active`);
});

const coffeeData = [
  {
    name: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Kahlua coffee",
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "5.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Espresso",
    description: "Classic black coffee",
    price: "4.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "6.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },
];

const teaData = [
  {
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "4.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },
];
const dessertData = [
  {
    name: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "3.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "5.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    name: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "6.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },
];


// function createCard(container, item) {
//   const card = document.createElement('div');
//   card.classList.add(`${container}-card`);

//   const img = document.createElement('img');
//   img.src = `assets/${item.name.toLowerCase().replace(/\s/g, '-')}.jpg`;
//   img.alt = item.name;
//   img.classList.add('card-img');

//   const contentDiv = document.createElement('div');
//   contentDiv.classList.add(`${container}-card-content`);

//   const titleP = document.createElement('p');
//   titleP.classList.add('card-title');
//   titleP.textContent = item.name;

//   const descriptionP = document.createElement('p');
//   descriptionP.classList.add('card-description');
//   descriptionP.textContent = item.description;

//   const priceP = document.createElement('p');
//   priceP.classList.add('card-price');
//   priceP.textContent = `$${item.price}`;

//   contentDiv.appendChild(img);
//   contentDiv.appendChild(titleP);
//   contentDiv.appendChild(descriptionP);
//   contentDiv.appendChild(priceP);

//   card.appendChild(contentDiv);

//   document.getElementById(`${container}Content`).appendChild(card);
// }

// function showTab(tabNumber) {
//   document.querySelectorAll('.products__tab').forEach(tab => tab.classList.remove('products__tab--active'));
//   document.querySelectorAll('.products__content').forEach(content => content.classList.remove('products__content--active'));

//   document.querySelector(`.products__tab--${tabNumber}`).classList.add('products__tab--active');
//   document.querySelector(`.products__content--${tabNumber}`).classList.add('products__content--active');
// }

// coffeeData.forEach(coffee => createCard('coffee', coffee));
// teaData.forEach(tea => createCard('tea', tea));
// dessertData.forEach(dessert => createCard('dessert', dessert));

// // Initial display
// showTab(1);

// // Event listeners for tabs
// document.querySelectorAll('.products__tab').forEach(tab => {
//   tab.addEventListener('click', () => {
//     const tabNumber = tab.getAttribute('data-tab');
//     showTab(tabNumber);
//   });
// });

function createCard(container, item) {
  const card = document.createElement('div');
  card.classList.add(`${container}-card`);

  const img = document.createElement('img');
  img.src = `assets/${item.name.toLowerCase().replace(/\s/g, '-')}.jpg`;
console.log(`Image path: assets/${item.name.toLowerCase().replace(/\s/g, '-')}.jpg`);
  // img.src = `assets/${item.name.toLowerCase().replace(/\s/g, '-')}.jpg`;
  img.alt = item.name;
  img.classList.add('card-img');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add(`${container}-card-content`);

  const titleP = document.createElement('p');
  titleP.classList.add('card-title');
  titleP.textContent = item.name;

  const descriptionP = document.createElement('p');
  descriptionP.classList.add('card-description');
  descriptionP.textContent = item.description;

  const priceP = document.createElement('p');
  priceP.classList.add('card-price');
  priceP.textContent = `$${item.price}`;

  contentDiv.appendChild(img);
  contentDiv.appendChild(titleP);
  contentDiv.appendChild(descriptionP);
  contentDiv.appendChild(priceP);

  card.appendChild(contentDiv);

  document.getElementById(`${container}Content`).appendChild(card);
}

function showTab(tabNumber) {
  document.querySelectorAll('.products__tab').forEach(tab => tab.classList.remove('products__tab--active'));
  document.querySelectorAll('.products__content').forEach(content => content.classList.remove('products__content--active'));

  document.querySelector(`.products__tab--${tabNumber}`).classList.add('products__tab--active');
  document.querySelector(`.products__content--${tabNumber}`).classList.add('products__content--active');
}

coffeeData.forEach(coffee => createCard('coffee', coffee));
teaData.forEach(tea => createCard('tea', tea));
dessertData.forEach(dessert => createCard('dessert', dessert));

// Initial display
showTab(1);

// Event listeners for tabs
document.querySelectorAll('.products__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabNumber = tab.getAttribute('data-tab');
    showTab(tabNumber);
  });
});
