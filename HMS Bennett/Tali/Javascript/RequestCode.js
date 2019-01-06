function OnLoad(){
  var itemCount = localStorage.getItem('inBasketCount');
  document.getElementById('basketCount').innerHTML = "Basket: " + itemCount;
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
