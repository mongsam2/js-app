const quotes = [
  {
    quote:
      "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The ones who are crazy enough to think they can change the world, are the ones that do.",
    author: "Anonymous",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "There are better starters than me but I’m a strong finisher.",
    author: "Usain Bolt",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote:
      "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: "David Frost",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const length = quotes.length;
const index = Math.floor(Math.random() * quotes.length);
const todayQuote = quotes[index];

quote.innerText = todayQuote["quote"];
author.innerText = ` - ${todayQuote["author"]}`;
