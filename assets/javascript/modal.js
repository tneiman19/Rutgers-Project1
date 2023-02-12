// Get the modal
var modal = document.getElementById("myModal");

// Get all buttons that opens the modal
var btns = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Loop through all the buttons and attach click event to each button
function btnEvent(){

  for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (e) {
      modal.style.display = "block";
      var modalIndex = e.target.getAttribute("data-index");
      var dataAuthor = e.target.getAttribute("data-author");
      var dataQuote1 = e.target.getAttribute("data-quote1");
      var dataQuote2 = e.target.getAttribute("data-quote2");
      var dataLanguage = e.target.getAttribute("data-language");

      document.getElementById("authorModalSpan").textContent = dataAuthor;
      document.getElementById("quoteModalSpan").textContent = dataQuote1;
      document.getElementById("translatedModalSpan").textContent = dataQuote2;
      document.getElementById("languageModalSpan").textContent = dataLanguage;
    };
  }
}

btnEvent()

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
