const data = [
  {
    id: 1,
    question: "What is the capital city of Morocco?",
    answers: [
      {
        text: "Rabat",
        correct: true,
      },
      {
        text: "Casablanca",
        correct: false,
      },
      {
        text: "Marrakech",
        correct: false,
      },
      {
        text: "Fez",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which mountain range extends through Morocco?",
    answers: [
      {
        text: "Andes Mountains",
        correct: false,
      },
      {
        text: "Rocky Mountains",
        correct: false,
      },
      {
        text: "Himalayas",
        correct: false,
      },
      {
        text: "Atlas Mountains",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "What is the currency of Morocco?",
    answers: [
      {
        text: "Dirham",
        correct: true,
      },
      {
        text: "Dinar",
        correct: false,
      },
      {
        text: "Euro",
        correct: false,
      },
      {
        text: "Pound",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Which body of water lies to the west of Morocco?",
    answers: [
      {
        text: "Mediterranean Sea",
        correct: false,
      },
      {
        text: "Red Sea",
        correct: false,
      },
      {
        text: "Atlantic Ocean",
        correct: true,
      },
      {
        text: "Indian Ocean",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "What is a traditional Moroccan garment commonly worn by men?",
    answers: [
      {
        text: "Kimono",
        correct: false,
      },
      {
        text: "Sari",
        correct: false,
      },
      {
        text: "Djellaba",
        correct: true,
      },
      {
        text: "Kilt",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Which famous Moroccan city is known for its blue-painted buildings?",
    answers: [
      {
        text: "Agadir",
        correct: false,
      },
      {
        text: "Essaouira",
        correct: false,
      },
      {
        text: "Chefchaouen",
        correct: true,
      },
      {
        text: "Tangier",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "What is the largest desert in Morocco?",
    answers: [
      {
        text: "Arabian Desert",
        correct: false,
      },
      {
        text: "Sahara Desert",
        correct: true,
      },
      {
        text: "Gobi Desert",
        correct: false,
      },
      {
        text: "Kalahari Desert",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Which Moroccan dish is a savory pie made with thin layers of pastry?",
    answers: [
      {
        text: "Tagine",
        correct: false,
      },
      {
        text: "Couscous",
        correct: false,
      },
      {
        text: "Pastilla",
        correct: true,
      },
      {
        text: "Harira",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "What is the name of the strait that separates Morocco from Spain?",
    answers: [
      {
        text: "Strait of Malacca",
        correct: false,
      },
      {
        text: "Strait of Magellan",
        correct: false,
      },
      {
        text: "Strait of Gibraltar",
        correct: true,
      },
      {
        text: "Strait of Hormuz",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "What is the traditional Moroccan footwear often worn by both men and women?",
    answers: [
      {
        text: "Clogs",
        correct: false,
      },
      {
        text: "Sandals",
        correct: false,
      },
      {
        text: "Boots",
        correct: false,
      },
      {
        text: "Babouche",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "Which Moroccan city is known for its ancient Roman ruins?",
    answers: [
      {
        text: "Volubilis",
        correct: true,
      },
      {
        text: "Meknes",
        correct: false,
      },
      {
        text: "Tetouan",
        correct: false,
      },
      {
        text: "Agadir",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "What is the name of the traditional Moroccan mint tea often served as a gesture of hospitality?",
    answers: [
      {
        text: "Qahwa",
        correct: false,
      },
      {
        text: "Mate",
        correct: false,
      },
      {
        text: "Atay B'naana",
        correct: true,
      },
      {
        text: "Chai",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Which Moroccan city is famous for its annual cherry festival?",
    answers: [
      {
        text: "Ifrane",
        correct: false,
      },
      {
        text: "Sefrou",
        correct: true,
      },
      {
        text: "Oujda",
        correct: false,
      },
      {
        text: "Kenitra",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "What is the name of the traditional Moroccan dish made from semolina and usually served with meat or vegetables?",
    answers: [
      {
        text: "Tagine",
        correct: false,
      },
      {
        text: "Pastilla",
        correct: false,
      },
      {
        text: "Harira",
        correct: false,
      },
      {
        text: "Couscous",
        correct: true,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "DH 5000" },
  { id: 2, amount: "DH 15000" },
  { id: 3, amount: "DH 30000" },
  { id: 4, amount: "DH 60000" },
  { id: 5, amount: "DH 100000" },
  { id: 6, amount: "DH 150000" },
  { id: 7, amount: "DH 250000" },
  { id: 8, amount: "DH 400000" },
  { id: 9, amount: "DH 600000" },
  { id: 10, amount: "DH 1000000" },
  { id: 11, amount: "DH 5000000" },
  { id: 12, amount: "DH 100000000" },
  { id: 13, amount: "DH 300000000" },
  { id: 14, amount: "DH 500000000" },
  { id: 15, amount: "DH 1000000000" },
].reverse();

export { prizeMoney, data };
