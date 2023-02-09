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

var categoryList = [
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];
