//To Be Run On TaliHome.html

QUnit.test("#Unit Test 1, Check Total Items Pulled From Server", function(assert){
  assert.equal(totalItems, 4, "Local Items = " + totalItems + ", 4 Server Items");
});

//To Be Run On TaliItem.html

QUnit.test("#Unit Test 2, Ensures Titles Are Pulled Correctly", function(assert){
  assert.equal(itemsTitle[0], "Tali's Textiles - 001", "Correct Data Pulled");
});

QUnit.test("#Unit Test 3, Ensures Names Are Pulled Correctly", function(assert){
  assert.equal(itemsName[1], "Leather N7 Jacket", "Correct Data Pulled");
});

QUnit.test("#Unit Test 4, Ensures Costs Are Pulled Correctly", function(assert){
  assert.equal(itemsCost[2], "12", "Correct Data Pulled");
});

QUnit.test("#Unit Test 5, Ensures Quantities Are Pulled Correctly", function(assert){
  assert.equal(itemsQuantity[3], "1", "Correct Data Pulled");
});

QUnit.test("#Unit Test 6, Ensures Descriptions Are Pulled Correctly", function(assert){
  assert.equal(itemsDescription[2], "Wear at the gym to let everyone know that you lift like a Krogan", "Correct Data Pulled");
});

QUnit.test("#Unit Test 7, Ensures Image Sources Are Pulled Correctly", function(assert){
  assert.equal(itemsImages[3], "<img src='images/N7Eagle.png' width='75%'>", "Correct Data Pulled");
});

//If you click on the Wooden Pistol

QUnit.test("#Unit Test 8, Ensures The Correct Page Is Pulled Up From Table Click", function(assert){
  assert.equal(itemClickedNo, 3, "Correctly Calculates Item Page Needed");
});
