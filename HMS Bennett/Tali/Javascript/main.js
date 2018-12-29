var itemsTitle = [];
var itemsName = [];
var itemsCost = [];
var itemsQuantity = [];
var itemsDescription = [];
var itemsImages = [];
var basketItemName = [];
var basketItemCost = [];
var totalItems = 0;
var itemClickedNo = 0;
var cIndex = 0;
var rIndex = 0;
var inBasket = 0;

function OnLoad(){
  //decides how to proceed depending on what page is open
  if(document.getElementById('pageTitle').innerHTML == "Tali's Textiles - Home"){
    GetTotalItems();
    GetHomeItems();
    PopulateHomePage();
  }else if(document.getElementById('pageTitle').innerHTML == "Tali's Textiles - Basket"){
    PopulateBasketPage();
    CalculateTotalCost();
  }else if(document.getElementById('titleData').innerHTML == "Tali's Textiles - "){
    itemClickedNo = localStorage.getItem('itemClicked');
    GetPageItems();
    PopulateItemPage();
  }
  var itemCount = localStorage.getItem('inBasketCount');
  document.getElementById('basketCount').innerHTML = "Basket: " + itemCount;
}

//Database Call-----------------------------------------------------------------

function GetTotalItems(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      totalItems = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:9090/totalItems", false);
  xhttp.send();
  return;
}

function GetHomeItems(){
  GetItemName();
  GetItemImageSrc();
}

function GetPageItems(){
  GetItemTitle();
  GetItemName();
  GetItemCost();
  GetItemQuantity();
  GetItemDescription();
  GetItemImageSrc();
}

function GetItemTitle(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var string = this.responseText;
      itemsTitle = string.split(",");
    }
  };
  xhttp.open("GET", "http://localhost:9090/itemTitle", false);
  xhttp.send();
}

function GetItemName(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var string = this.responseText;
      itemsName = string.split(",");
    }
  };
  xhttp.open("GET", "http://localhost:9090/itemName", false);
  xhttp.send();
}

function GetItemCost(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var string = this.responseText;
      itemsCost = string.split(",");
    }
  };
  xhttp.open("GET", "http://localhost:9090/itemCost", false);
  xhttp.send();
}

function GetItemQuantity(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var string = this.responseText;
      itemsQuantity = string.split(",");
    }
  };
  xhttp.open("GET", "http://localhost:9090/itemQuantity", false);
  xhttp.send();
}

function GetItemDescription(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var string = this.responseText;
      itemsDescription = string.split(",");
    }
  };
  xhttp.open("GET", "http://localhost:9090/itemDescription", false);
  xhttp.send();
}

function GetItemImageSrc(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var string = this.responseText;
      itemsImages = string.split(",");
    }
  };
  xhttp.open("GET", "http://localhost:9090/itemImageSrc", false);
  xhttp.send();
}

function GetLowerQuantity(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){

    }
  };
  xhttp.open("GET", "http://localhost:9090/lowerQuantity", true);
  xhttp.send();
}

//Home Page Code----------------------------------------------------------------

function StoreClick(item){
  // console.log(item.cellIndex);
  // alert(item.cellIndex);

  cIndex = item.cellIndex;
  // alert(item.cellIndex);
}

function StoreRowClick(item){
  // console.log(item.rowIndex);
  // alert(item.rowIndex);

  rIndex = item.rowIndex;
  var output = 0;

  //calculates which item was picked via C and R index
  if(rIndex == 0){
    output = cIndex;
  }else{
    output = (cIndex + 3) * rIndex;
  }
  // alert(item.rowIndex + ", " + output);

  localStorage.setItem('itemClicked', output);
}

function PopulateHomePage(){
  var table = document.getElementById('menuContent');

  var rowsNeeded = Math.ceil(totalItems / 3);
  var remainder = totalItems % 3;
  console.log(totalItems + " - " + rowsNeeded + " - " + remainder);

  for(var i = 0; i < rowsNeeded; i++){
    console.log("Remainder = " + remainder + " Rows Needed = " + rowsNeeded);
    var row = table.insertRow(i);
    row.setAttribute("onclick", "StoreRowClick(this)");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if(remainder == 1 && i == (rowsNeeded - 1)){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell1.setAttribute("onclick", "StoreClick(this)");
      console.log("one row fill");
    }else if(remainder == 2 && i == (rowsNeeded - 1)){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell1.setAttribute("onclick", "StoreClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 3] + "<br><br>" + itemsImages[i + 3] + "</a>";
      cell2.setAttribute("onclick", "StoreClick(this)");
      console.log("two row fill");
    }else if (i == 0){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i] + "<br><br>" + itemsImages[i] + "</a>";
      cell1.setAttribute("onclick", "StoreClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 1] + "<br><br>" + itemsImages[i + 1] + "</a>";
      cell2.setAttribute("onclick", "StoreClick(this)");
      cell3.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell3.setAttribute("onclick", "StoreClick(this)");
      console.log("start row fill");
    }else{
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell1.setAttribute("onclick", "StoreClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 3] + "<br><br>" + itemsImages[i + 3] + "</a>";
      cell2.setAttribute("onclick", "StoreClick(this)");
      cell3.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 4] + "<br><br>" + itemsImages[i + 4] + "</a>";
      cell3.setAttribute("onclick", "StoreClick(this)");
      console.log("three row fill");
    }
    // console.log(itemsTitle + ", " + itemsName + ", " + itemsCost + ", " + itemsQuantity + ", " + itemsDescription + ", " + itemsImages);
  }
}

//Item Page Code----------------------------------------------------------------

function PopulateItemPage(){
  document.getElementById('titleData').innerHTML = itemsTitle[itemClickedNo];
  document.getElementById('nameData').innerHTML = itemsName[itemClickedNo];
  document.getElementById('costData').innerHTML = "&pound" + itemsCost[itemClickedNo];
  document.getElementById('quantityData').innerHTML = "Stock Left: " + itemsQuantity[itemClickedNo];
  document.getElementById('descriptionData').innerHTML = itemsDescription[itemClickedNo];
  document.getElementById('imageData').innerHTML = itemsImages[itemClickedNo];
}

//Basket Code-------------------------------------------------------------------

function AddToBasket(){
  document.getElementById("buttonBuy").innerHTML = "Added To Basket";
  document.getElementById("buttonBuy").disabled = true;
  inBasket = localStorage.getItem("inBasketCount");
  inBasket++;
  localStorage.setItem("inBasketCount", inBasket);
  itemsQuantity[itemClickedNo]--;
  document.getElementById("quantityData").innerHTML = "Stock Left: " + itemsQuantity[itemClickedNo];
  document.getElementById("basketCount").innerHTML = "Basket: " + inBasket;
  UpdateBasket(itemClickedNo);
  GetLowerQuantity();
}

function UpdateBasket(itemNumber){
  var tempOne = localStorage.getItem("basketItemName");
  tempOne += (itemsName[itemNumber] + ",");
  localStorage.setItem("basketItemName", tempOne);

  var tempTwo = localStorage.getItem("basketItemCost");
  tempTwo += (itemsCost[itemNumber] + ",");
  localStorage.setItem("basketItemCost", tempTwo);
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

//Request Code------------------------------------------------------------------

function SendRequest(){
  var name = document.getElementById('requestName').value;
  var email = document.getElementById('requestEmail').value;
  var description = document.getElementById('requestNature').value;
  var url = document.getElementById('requestURL').value;

  if(name == "" || email == "" || description == "" || url == ""){
    alert("Please fill out all areas to the best of your ability, as this will help the design process of your request.");
  }else{
    // alert("Name: " + name + " Email: " + email + " Des: " + description + " URL: " + url);
    var bodyMessage = "Name: " + name + " Email: " + email + " Des: " + description + " URL: " + url;
    var subject = "Tali's Textiles Request"

    var mailtoLink = "mailto:somebody@example.com" + "?subject" + subject + "&body=" + bodyMessage;

    emailWindow = window.open(mailtoLink);
    // emailWindow.close();

    // window.href("mailto:someone@example.com");
  }
}
