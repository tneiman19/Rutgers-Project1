var author = "";
var originalQuote = "";
var translatedQuote = '';
var category = "";
var authorEl = document.getElementById("author");
var quoteEl = document.getElementById("originalQuote");
var getQuoteButton = document.getElementById("getQuoteButton");
var categoryDropdown = document.getElementById("categoryDropdown");
var previousQuotes = document.getElementById("previousQuotes");
var targetLang;
var target2;
var languageSelector = document.getElementById("language");
var translateButton = document.getElementById("translateButton");
var translatedText = document.getElementById("translatedQuote");
var container = document.getElementById("card-container");
var btnContainer = document.getElementById('btnContainer')

var categoryList = [
  "Alone",
  "Amazing",
  "Anger",
  "Architecture",
  "Art",
  "Attitude",
  "Beauty",
  "Best",
  "Birthday",
  "Business",
  "Car",
  "Change",
  "Communications",
  "Computers",
  "Cool",
  "Courage",
  "Dad",
  "Dating",
  "Death",
  "Design",
  "Dreams",
  "Education",
  "Environmental",
  "Equality",
  "Experience",
  "Failure",
  "Faith",
  "Family",
  "Famous",
  "Fear",
  "Fitness",
  "Food",
  "Forgiveness",
  "Freedom",
  "Friendship",
  "Funny",
  "Future",
  "God",
  "Good",
  "Government",
  "Graduation",
  "Great",
  "Happiness",
  "Health",
  "History",
  "Home",
  "Hope",
  "Humor",
  "Imagination",
  "Inspirational",
  "Intelligence",
  "Jealousy",
  "Knowledge",
  "Leadership",
  "Learning",
  "Legal",
  "Life",
  "Love",
  "Marriage",
  "Medical",
  "Men",
  "Mom",
  "Money",
  "Morning",
  "Movies",
  "Success",
];
