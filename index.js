// dom
//hamburger menu

//Popup Dom
let popup = document.getElementById("popup");

// Quote dom
const quote_api = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBox = document.getElementById("quote-box");

//popup menu
function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// quote fetching API
async function getquote(quote_api) {
  const response = await fetch(quote_api);
  var data = await response.json();

  // puts the api data in the html
  quote.innerHTML = `"<i>${data.content}"</i>`;
  author.innerHTML = data.author;
  quoteBox.style.display = "block";
}

//onClick picture change
