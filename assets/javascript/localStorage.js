var usedQuotes = checkLocalStorage();

function checkLocalStorage() {
  if (localStorage.getItem("quotes") === null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("quotes"));
  }
}

function saveQuote(quote1, quote2) {
  var newquote = {
    originalQuote: quote1,
    translatedQuote: quote2,
  };
  usedQuotes.push(newquote);
  var stringQuotes = JSON.stringify(usedQuotes);
  localStorage.setItem("quotes", stringQuotes);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderButtons(array){
 console.log(array)
}

renderButtons(usedQuotes)
