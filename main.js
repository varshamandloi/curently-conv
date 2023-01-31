let form = document.querySelector("form");
let userInput = document.getElementById("userInput");
let currency = document.getElementById("currencySelector");

form.addEventListener("submit", converterFunc);

// Currency

let dollar = 79.65;
let euro = 79.52;
let pound = 90.83;

function converterFunc(e) {
  e.preventDefault();

  if (currency.value == 1) {

    let outputCurrency = parseInt(userInput.value) / dollar;
    let output = document.querySelector("h1");
    output.innerText = "$" + " " + outputCurrency ;

  } 
  else if (currency.value == 2) 
  {

    let outputCurrency = parseInt(userInput.value) / euro;
    let output = document.querySelector("h1");
    output.innerText = outputCurrency;
  }
  else if(currency.value == 3)
  {
    let outputCurrency = parseInt(userInput.value) / pound;
    let output = document.querySelector("h1");
    output.innerText = outputCurrency;
  }else{
    window.alert("invalid selection")
  }

  form.reset();
}
