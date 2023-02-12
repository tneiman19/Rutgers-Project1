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
    language: targetLang,
    author: author,
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

function renderCards(myArray) {
  console.log(myArray);

  for (let i = 0; i < myArray.length; i++) {
    var newButton = document.createElement("button");
    newButton.setAttribute("data-index", i);
    newButton.setAttribute("data-author", myArray[i].author);
    newButton.setAttribute("data-quote1", myArray[i].originalQuote);
    newButton.setAttribute("data-quote2", myArray[i].translatedQuote);
    newButton.setAttribute("data-language", myArray[i].language);
    //newButton.setAttribute("id", 'myModal')
    newButton.setAttribute("class", "myBtn btn");

    newButton.innerText = myArray[i].author;
    btnContainer.appendChild(newButton);
  }
  checkLocalStorage();
}

function callAnotherFunction() {
  checkLocalStorage();
  removeAllChildNodes(btnContainer);
  renderCards(usedQuotes);
  btnEvent();
}
