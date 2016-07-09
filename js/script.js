// function test

function generate() {
  
  var name = document.getElementById('name');
  var contact = document.getElementById('contact');
  var role = document.getElementById('role');
  var loan = document.getElementById('loan');
  var stage = document.getElementById('stage');
  var sit = document.getElementById('sit');
  var quest = document.getElementById('quest');
  
  
  
  if (document.getElementById("contact").value === "" || document.getElementById("name").value === "" || document.getElementById("role").value === "" || document.getElementById("loan").value === "" || document.getElementById("stage").value === "" || document.getElementById("sit").value === "" || document.getElementById("quest").value === "") {
    document.getElementById("warning").style.display = "block";
  } else {
    document.getElementById("request").innerHTML = contact.value + " / " + name.value + " / " + role.value + " / " + loan.value + " / " + stage.value + " / " + "The situation is: " + sit.value + " My question is: " + quest.value;

    // document.getElementById("request").innerHTML = "Hello, I have a " + contact.value + "." + " Their name is " + name.value + ", and they're the " + role.value + " for Loan #" + loan.value + "." + " It's currently in the " + stage.value + " stage." + " Here's what's going on. " + sit.value + " Here's my question. " + quest.value;   
    
    document.getelementById("warning").style.display = "none";
  }
  
}

// Dropdown

$('.dropdown-toggle').dropdown()

// Copy - http://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery

function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}