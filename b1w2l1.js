// stijn de vries, opdracht: pizza calculator
alert ('Welkom bij Pizzaria Chappings, druk op oke om verder te gaan');
alert ('druk op oke om naar de maat van de pizza"s te gaan');
alert ('u heeft de keuze uit, Small € 4.95 , Medium € 7.99 en Large € 11.49');

const amountSmall = Number(prompt("Hoeveel Small pizza's had u gewilt?"))
const amountMedium = Number(prompt("Hoeveel Medium pizza's had u gewilt?"))
const amountLarge = Number(prompt("Hoeveel Large pizza's had u gewilt"))

const priceSmall = 4.95;
const priceMedium = 7.99;
const priceLarge = 11.49;

var totalPriceSmall = amountSmall * priceSmall 
var totalPriceMedium = amountMedium * priceMedium
var totalPriceLarge = amountLarge * priceLarge
var rekening = totalPriceSmall + totalPriceMedium + totalPriceLarge 
var totalPizza = amountSmall + amountMedium + amountLarge

alert("prijs voor small pizza's is " + totalPriceSmall)
alert("prijs voor medium pizza's is " + totalPriceMedium)
alert("prijs voor large pizza's is " + totalPriceLarge)
alert("prijs van de rekening is " + rekening)

alert("aantal pizza's zijn " + totalPizza)