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
  itemClickedNo = localStorage.getItem('itemClicked');
  GetPageItems();
  PopulateItemPage();

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
  // GetLowerQuantity();
}

function UpdateBasket(itemNumber){
  var tempOne = localStorage.getItem("basketItemName");
  tempOne += (itemsName[itemNumber] + ",");
  localStorage.setItem("basketItemName", tempOne);

  var tempTwo = localStorage.getItem("basketItemCost");
  tempTwo += (itemsCost[itemNumber] + ",");
  localStorage.setItem("basketItemCost", tempTwo);
}
