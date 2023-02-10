// Call this function on page load to populate the dropdown options
populateCategoryDropdown(categoryList);
renderCards(usedQuotes);

getQuoteButton.addEventListener("click", fetchOriginalQuote);

function fetchOriginalQuote() {
  category = categoryDropdown.value;
  console.log(category);

  fetch("https://api.api-ninjas.com/v1/quotes?category=" + category, {
    method: "GET",
    headers: {
      "X-Api-Key": "5x71s2TVATKI4DvhobMvrw==t5uBHyqBLjdXumUv",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      //console.log(response)
      return response.json();
    })
    .then(function (result) {
      getQuoteInfo(result);
      displayQuoteInfo();
      // console.log(result);
      // console.log(result[0].author);
      // console.log(result[0].quote);
    })
    .catch(function (error) {
      console.error("Error: ", error);
    });
}

//This function takes in a fetch result and assigns values to variables
function getQuoteInfo(result) {
  author = result[0].author;
  originalQuote = result[0].quote;
  console.log(author, originalQuote);
}

//This function sets the author and quote on the DOM
function displayQuoteInfo() {
  //authorEl.textContent = author;
  //quoteEl.textContent = originalQuote;
  logLetters(author, authorEl);
  logLetters(originalQuote, quoteEl);
  //saveQuote(originalQuote, originalQuote); // Testing.  This will be called after we get the translated quote to save to local storge
}

// This function generates the options for the category dropdown
function populateCategoryDropdown(array) {
  for (let i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.textContent = array[i];
    categoryDropdown.appendChild(option);
  }
}

// This function takes in a string and a DOM Element and will loop through the string displaying the string in the element one char at a time
function logLetters(text, area) {
  var tempText = "";
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      tempText = tempText + text[i];
      area.textContent = tempText;
    }, i * 70);
  }
}
