var basketItemName = [];
var basketItemCost = [];
var inBasket = 0;

function OnLoad(){
  PopulateBasketPage();
  CalculateTotalCost();
  var itemCount = localStorage.getItem('inBasketCount');
  document.getElementById('basketCount').innerHTML = "Basket: " + itemCount;
}

function PopulateBasketPage(){
  var table = document.getElementById('basketContent');
  var row;
  var cell;
  var stringOne = localStorage.getItem("basketItemName");
  console.log(stringOne);
  basketItemName = stringOne.split(",");
  var stringTwo = localStorage.getItem("basketItemCost");
  console.log(stringTwo);
  basketItemCost = stringTwo.split(",");
  for(var i = 0; i < (basketItemName.length - 1); i++){
    row = table.insertRow(i);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerHTML = "Name: " + basketItemName[i];
    cell2.innerHTML = "Cost: &pound" + basketItemCost[i];
  }
}

function Checkout(){
  alert("Items Purchased");
  inBasket = 0;
  localStorage.setItem("inBasketCount", 0);
  basketItemName = [];
  basketItemCost = [];
  localStorage.setItem("basketItemName", "");
  localStorage.setItem("basketItemCost", "");
  location.reload();
}

function CalculateTotalCost(){
  var total = 0;
  for(var i = 0; i < basketItemCost.length; i++){
    total += Number(basketItemCost[i]);
  }
  document.getElementById("totalCost").innerHTML = "Total: &pound" + total;
}
