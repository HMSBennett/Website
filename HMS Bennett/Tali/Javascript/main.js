var itemsArray = [];
var itemsTitle = [];
var itemsName = [];
var itemsCost = [];
var itemsQuantity = [];
var itemsDescription = [];
var itemsImages = [];
var totalItems = 4;
var itemNumber = 0;
var itemClickedNo = 0;
var cIndex = 0;
var rIndex = 0;

function OnLoad(){
  //decides how to proceed depending on what page is open
  if(document.getElementById('pageTitle').innerHTML == "Tali's Textiles - Home"){
    GetTotalItems();
    GetHomeItems();
    PopulateHomePage();
  }else if(document.getElementById('pageTitle').innerHTML == "Tali's Textiles - Basket"){
    // UpdateBasket();
  }else if(document.getElementById('titleData').innerHTML == "Tali's Textiles - "){
    itemClickedNo = localStorage.getItem("itemClicked");
    GetPageItems();
    PopulateItemPage();
  }else{

  }
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

//Home Page Code----------------------------------------------------------------

function storeClick(item){
  // console.log(item.cellIndex);
  // alert(item.cellIndex);

  cIndex = item.cellIndex;
}

function storeRowClick(item){
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

  localStorage.setItem("itemClicked", output);
}

function PopulateHomePage(){
  var table = document.getElementById('menuContent');

  var rowsNeeded = Math.ceil(totalItems / 3);
  var remainder = totalItems % 3;
  console.log(totalItems + " - " + rowsNeeded + " - " + remainder);

  for(var i = 0; i < rowsNeeded; i++){
    console.log("Remainder = " + remainder + " Rows Needed = " + rowsNeeded);
    var row = table.insertRow(i);
    row.setAttribute("onclick", "storeRowClick(this)");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if(remainder == 1 && i == (rowsNeeded - 1)){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      console.log("one row fill");
    }else if(remainder == 2 && i == (rowsNeeded - 1)){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 3] + "<br><br>" + itemsImages[i + 3] + "</a>";
      cell2.setAttribute("onclick", "storeClick(this)");
      console.log("two row fill");
    }else if (i == 0){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i] + "<br><br>" + itemsImages[i] + "</a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 1] + "<br><br>" + itemsImages[i + 1] + "</a>";
      cell2.setAttribute("onclick", "storeClick(this)");
      cell3.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell3.setAttribute("onclick", "storeClick(this)");
      console.log("start row fill");
    }else{
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 2] + "<br><br>" + itemsImages[i + 2] + "</a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 3] + "<br><br>" + itemsImages[i + 3] + "</a>";
      cell2.setAttribute("onclick", "storeClick(this)");
      cell3.innerHTML = "<a href='TaliItem.html'>" + itemsName[i + 4] + "<br><br>" + itemsImages[i + 4] + "</a>";
      cell3.setAttribute("onclick", "storeClick(this)");
      console.log("three row fill");
    }
  }
}

//Item Page Code----------------------------------------------------------------

function PopulateItemPage(){
  document.getElementById('titleData').innerHTML = itemsTitle[itemClickedNo];
  document.getElementById('nameData').innerHTML = itemsName[itemClickedNo];
  document.getElementById('costData').innerHTML = "£" + itemsCost[itemClickedNo];
  document.getElementById('quantityData').innerHTML = "Stock Left: " + itemsQuantity[itemClickedNo];
  document.getElementById('descriptionData').innerHTML = itemsDescription[itemClickedNo];
  document.getElementById('imageData').innerHTML = itemsImages[itemClickedNo];
}

//Basket Code-------------------------------------------------------------------

function AddToBasket(){
  // itemClickedNo = localStorage.getItem("itemClicked");
  // var temp = itemsJSON[itemClickedNo].inBasket;
  // var temp2 = (parseInt(temp) + 1).toString();
  // itemsJSON[itemClickedNo].inBasket = temp2;
  // console.log(temp + "  " + temp2);
}

function ItemsInBasket(){
// for(int i = 0; i < 0; i++){
//
// }
}

function UpdateBasket(){
  // for(var i = 0; i < itemsJSON.length; i++){
  //   if(itemsJSON[i].inBasket != 0){
  //     document.getElementById('itemName').innerHTML = itemsJSON[i].name;
  //     document.getElementById('itemCost').innerHTML = itemsJSON[i].cost;
  //     document.getElementById('itemInBasket').innerHTML = itemsJSON[i].inBasket;
  //   }else{
  //     document.getElementById('itemName').innerHTML = "Basket Empty";
  //   }
  // }
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
