const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("This line shows from browser");
});

const books = [
  {
    id: 1,
    author: "Borhan Uddin",
    email: "borhan123@outlook.com",
    category: "Novel",
    price: "200tk",
  },

  {
    id: 2,
    author: "Abdullah AL Monim Rasel",
    email: "rasel123@outlook.com",
    category: "Comics",
    price: "120tk",
  },
  {
    id: 3,
    author: "Naziat Hossain Rakib",
    email: "rakib123@outlook.com",
    category: "Islamic",
    price: "300tk",
  },
  {
    id: 4,
    author: "Md. Al Amin Nipu",
    email: "nipu123@outlook.com",
    category: "Cloud IT Solution",
    price: "420tk",
  },
  {
    id: 5,
    author: "Rayhanul Islam",
    email: "rayhan123@outlook.com",
    category: "Electrical Electronic Engineering",
    price: "300tk",
  },
  {
    id: 6,
    author: "Nazmus Shakib",
    email: "shakib123@outlook.com",
    category: "CS Department",
    price: "500tk",
  },
];
app.get("/books", (req, res) => {
  res.send(books);
});
app.get("/book/:id", (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);
  const book = books.find((boo) => boo.id === id);
  res.send(book);
});

const fruits = [
  {
    id: 1,
    name: "Mango",
    grown: "Rajshahi",
    price: "120/kg",
  },

  {
    id: 2,
    name: "Litchi",
    grown: "Dinajpur",
    price: "180/hundred",
  },
  {
    id: 3,
    name: "Guava",
    grown: "Borishal",
    price: "70/kg",
  },
  {
    id: 4,
    name: "Pineapple",
    grown: "Rangamati",
    price: "40/peice",
  },
  {
    id: 5,
    name: "Banana",
    grown: "Modhuppur",
    price: "30/quarter",
  },
  {
    id: 6,
    name: "Orange",
    grown: "Bandarbon",
    price: "150/kg",
  },
];
app.get("/fruits", (req, res) => {
  res.send(fruits);
});
app.get("/fruit/:id", (req, res) => {
  // console.log(req.params);
  const id = parseInt(req.params.id);
  const fruit = fruits.find((singleFruit) => singleFruit.id === id);
  res.send(fruit);
  // res.send("This is single object fruit");
});

const techGaintCompanies = [
  {
    rank: 1,
    companyName: "Apple",
    revenue: "$274.515",
    employees: 147000,
    headQuarters: "Cupertino, California, US",
  },

  {
    rank: 2,
    companyName: "Samsung Electronics",
    revenue: "$274.515",
    employees: 267937,
    headQuarters: "Suwon, South Korea",
  },
  {
    rank: 3,
    companyName: "Alphabet",
    revenue: "$182.527",
    employees: 135301,
    headQuarters: "Mountain View, California, US",
  },
  {
    rank: 4,
    companyName: "Foxconn",
    revenue: "$181.945",
    employees: 878429,
    headQuarters: "New Taipei City, Taiwan",
  },
  {
    rank: 5,
    companyName: "Microsoft",
    revenue: "$143.015",
    employees: 163000,
    headQuarters: "Redmond, Washington, US",
  },
  {
    rank: 6,
    companyName: "Huawei",
    revenue: "$129.184",
    employees: 197000,
    headQuarters: "Shenzhen, China",
  },
  {
    rank: 7,
    companyName: "Dell Technologies	",
    revenue: "$92.224",
    employees: 158000,
    headQuarters: "Round Rock, Texas, US",
  },
  {
    rank: 8,
    companyName: "Meta",
    revenue: "$85.965",
    employees: 58604,
    headQuarters: "Menlo Park, California, US",
  },
  {
    rank: 9,
    companyName: "Sony",
    revenue: "$84.893",
    employees: 109700,
    headQuarters: "Tokyo, Japan",
  },
  {
    rank: 10,
    companyName: "Hitachi",
    revenue: "$82.345",
    employees: 350864,
    headQuarters: "Tokyo, Japan",
  },
];
app.get("/", (req, res) => {
  res.send("Hello from Browser");
});

app.get("/techGaintCompanies", (req, res) => {
  res.send(techGaintCompanies);
});

app.get("/techGaintCompanies/:rank", (req, res) => {
  // console.log(req.params);
  const rank = parseInt(req.params.rank);
  const techGaintCompany = techGaintCompanies.find((singleTechGaintCompany) => singleTechGaintCompany.rank === rank);
  res.send(techGaintCompany);
});

app.listen(port, () => {
  console.log("Hello! feom server side Command Line");
});
