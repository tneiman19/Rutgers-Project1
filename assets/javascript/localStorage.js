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

// function renderCards(array) {
//   console.log(array);

//   for (let i = 0; i < array.length; i++) {
//     var card = document.createElement("section");
//     card.setAttribute("class", "card");
//     var cardP = document.createElement("p");
//     cardP.innerText = `Author: ${array[i].author}

//   Original Quote: ${array[i].originalQuote}

//   Translated To: ${array[i].language}

//   Translated Quote: ${array[i].translatedQuote}
//   `;
//     card.appendChild(cardP);
//     container.appendChild(card);
//   }
//   checkLocalStorage();
// }

//<button data-index="0" id="myBtn">Open Modal</button>

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
    newButton.setAttribute("class", "myBtn");
    newButton.innerText = myArray[i].author;
    btnContainer.appendChild(newButton);
  }
  checkLocalStorage();
}

function callAnotherFunction() {
  checkLocalStorage();
  removeAllChildNodes(btnContainer);
  renderCards(usedQuotes);
  btnEvent()
}
