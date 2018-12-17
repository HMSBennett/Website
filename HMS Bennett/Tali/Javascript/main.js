var itemsJSON = [{
    "title":"Tali\'s Textiles - 001",
    "name":"Tali Zorah Patterned Scarf",
    "cost":"&pound" + "12.50",
    "quantity":"Quantity Left: 7",
    "description":"This scarf connects end to end and is great for the cold weather",
    "imageSrc":"images/TaliScarf.png"
  },{
    "title":"Tali\'s Textiles - 002",
    "name":"Leather N7 Jacket",
    "cost":"&pound" + "37.50",
    "quantity":"Quantity Left: 5",
    "description":"This faux leather jacket lets everyone know your favourite store on the citadel",
    "imageSrc":"images/N7Jacket.png"
  },{
    "title":"Tali\'s Textiles - 003",
    "name":"Krogan \'Lift\' T-Shirt",
    "cost":"&pound" + "12.50",
    "quantity":"Quantity Left: 2",
    "description":"Wear at the gym to let everyone know, you lift like a Krogan",
    "imageSrc":"images/kroganTshirt.png"
  },{
    "title":"Tali\'s Textiles - 004",
    "name":"Wooden N7 Eagle Pistol",
    "cost":"&pound" + "25.50",
    "quantity":"Quantity Left: 1",
    "description":"A wooden replica of Shepards trusty pistol",
    "imageSrc":"images/N7Eagle.png"
}];

var itemClickedNo = 1;
var cIndex = 0;
var rIndex = 0;

function OnLoad(){
  // console.log("Test: " + test);

  if(document.getElementById('pageTitle').innerHTML == "Tali's Textiles - Home"){
    PopulateHomePage();
  }else{
    itemClickedNo = localStorage.getItem("itemClicked");
    LoadPageDetails(itemClickedNo);
  }
}

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

  if(rIndex == 0){
    output = cIndex;
  }else{
    output = (cIndex + 3) * rIndex;
  }

  localStorage.setItem("itemClicked", output);
}

function PopulateHomePage(){
  var totalBoxes = 0;
  var table = document.getElementById('menuContent');
  itemsJSON.forEach(function(obj){
    totalBoxes++;
  });
  var rowsNeeded = Math.ceil(totalBoxes / 3);
  var remainder = totalBoxes % 3;
  for(var i = 0; i < rowsNeeded; i++){
    console.log("Remainder = " + remainder + " Rows Needed = " + rowsNeeded);
    var row = table.insertRow(i);
    row.setAttribute("onclick", "storeRowClick(this)");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if(remainder == 1 && i == (rowsNeeded - 1)){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 2].name + "<br><br> <img src='" + itemsJSON[i + 2].imageSrc + "' width='75%'> </a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      console.log("one row fill");
    }else if(remainder == 2 && i == (rowsNeeded - 1)){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 2].name + "<br><br> <img src='" + itemsJSON[i + 2].imageSrc + "' width='75%'> </a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 3].name + "<br><br> <img src='" + itemsJSON[i + 3].imageSrc + "' width='75%'> </a>";
      cell2.setAttribute("onclick", "storeClick(this)");
      console.log("two row fill");
    }else if (i == 0){
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i].name + "<br><br> <img src='" + itemsJSON[i].imageSrc + "' width='75%'> </a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 1].name + "<br><br> <img src='" + itemsJSON[i + 1].imageSrc + "' width='75%'> </a>";
      cell2.setAttribute("onclick", "storeClick(this)");
      cell3.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 2].name + "<br><br> <img src='" + itemsJSON[i + 2].imageSrc + "' width='75%'> </a>";
      cell3.setAttribute("onclick", "storeClick(this)");
      console.log("start row fill");
    }else{
      cell1.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 2].name + "<br><br> <img src='" + itemsJSON[i + 2].imageSrc + "' width='75%'> </a>";
      cell1.setAttribute("onclick", "storeClick(this)");
      cell2.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 3].name + "<br><br> <img src='" + itemsJSON[i + 3].imageSrc + "' width='75%'> </a>";
      cell2.setAttribute("onclick", "storeClick(this)");
      cell3.innerHTML = "<a href='TaliItem.html'>" + itemsJSON[i + 4].name + "<br><br> <img src='" + itemsJSON[i + 4].imageSrc + "' width='75%'> </a>";
      cell3.setAttribute("onclick", "storeClick(this)");
      console.log("three row fill");
    }
  }
}

function LoadPageDetails(itemClickedNo){
  document.getElementById('pageTitle').innerHTML = itemsJSON[itemClickedNo].title;
  document.getElementById('itemName').innerHTML = itemsJSON[itemClickedNo].name;
  document.getElementById('itemCost').innerHTML = itemsJSON[itemClickedNo].cost;
  document.getElementById('itemQuantity').innerHTML = itemsJSON[itemClickedNo].quantity;
  document.getElementById('itemDescription').innerHTML = itemsJSON[itemClickedNo].description;
  document.getElementById('itemImage').src = itemsJSON[itemClickedNo].imageSrc;
}
