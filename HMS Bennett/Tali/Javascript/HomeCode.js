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
  GetTotalItems();
  GetHomeItems();
  PopulateHomePage();

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
