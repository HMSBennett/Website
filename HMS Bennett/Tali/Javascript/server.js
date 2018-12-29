//Access Database---------------------------------------------------------------

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://bazzy:bazzyb@clientside-qre9x.mongodb.net/test?retryWrites=true";

var itemTitle = [];
var itemName = [];
var itemCost = [];
var itemQuantity = [];
var itemDescription = [];
var itemImageSrc = [];
var totalItems = 0;

MongoClient.connect(url, function (err, db) {
  if (err) {
    throw err;
  }
  console.log("Database Accessable");
  var dbo = db.db("stock");

  dbo.collection("stockCount").find({}).toArray(function(err, result) {
    if (err) {
      throw err;
    }
    for(var i = 0; i < result.length; i++){
      itemTitle[i] = result[i].title;
      itemName[i] = result[i].name;
      itemCost[i] = result[i].cost;
      itemQuantity[i] = result[i].quantity;
      itemDescription[i] = result[i].description;
      itemImageSrc[i] = result[i].imageSrc;
      totalItems++;
    }
  });
  db.close();
});

function LowerQuantity(){
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw err;
    }
    console.log("Lowering Quantity By One");
    var newQuan = itemQuantity[0] - 1;
    var dbo = db.db("stock");
    var myquery = { title: itemTitle[0] };
    var newvalues = { $set: {quantity: newQuan} };
    dbo.collection("stockCount").updateOne(myquery, newvalues, function(err, res) {
      if (err) {
        throw err;
      }
      console.log("Lowered Quantity of: " + itemTitle[0] + ", to: " + newQuan);
      db.close();
    });
  });
}

//Database URL------------------------------------------------------------------

//mongodb+srv://bazzy:bazzyb@clientside-qre9x.mongodb.net/test?retryWrites=true

//Speak To Client---------------------------------------------------------------

var http = require ("http");
var port = 9090;
var server;

server = http.createServer (function(request,response) {

response.writeHead(200, {"Access-Control-Allow-Origin":"*"});

  if(request.url == "/itemTitle"){
    response.end ("" + itemTitle + "");
  }else if(request.url == "/itemName"){
    response.end ("" + itemName + "");
  }else if(request.url == "/itemCost"){
    response.end ("" + itemCost + "");
  }else if(request.url == "/itemQuantity"){
    response.end ("" + itemQuantity + "");
  }else if(request.url == "/itemDescription"){
    response.end ("" + itemDescription + "");
  }else if(request.url == "/itemImageSrc"){
    response.end ("" + itemImageSrc + "");
  }else if(request.url == "/totalItems"){
    response.end ("" + totalItems + "");
  }else if(request.url == "/lowerQuantity"){
    LowerQuantity();
  }else{
    response.end ("<p> Hello World </p> <p> Path requested :" + request.url + "</p>");
  }
});

server.listen(port , function(){
  console.log("Server listening on port" + port);
});
