// Call this function on page load
populateCategoryDropdown(categoryList)

var category = "happiness";

getQuoteButton.addEventListener("click", () => console.log(categoryList.value));

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
    getQuoteInfo(result)
    displayQuoteInfo();
    // console.log(result);
    // console.log(result[0].author);
    // console.log(result[0].quote);
  })
  .catch(function (error) {
    console.error("Error: ", error);
  });

//This function takes in a fetch result and assigns values to variables
function getQuoteInfo(result) {
  author = result[0].author;
  originalQuote = result[0].quote;
  console.log(author, originalQuote);
}

function displayQuoteInfo() {
  authorEl.textContent = "Author: " + author;
  quoteEl.textContent = "Quote: " + originalQuote;
}

// This function generates the options for the category dropdown  
function populateCategoryDropdown(array){
  for (let i = 0; i < array.length; i++) {
    var option = document.createElement('option')
    option.setAttribute('value', array[i])
    option.textContent = array[i]
    categoryDropdown.appendChild(option)
    
  }
}
