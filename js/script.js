// Generate Function

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

    // Saved default template, not currently used.
    // document.getElementById("request").innerHTML = "Hello, I have a " + contact.value + "." + " Their name is " + name.value + ", and they're the " + role.value + " for Loan #" + loan.value + "." + " It's currently in the " + stage.value + " stage." + " Here's what's going on. " + sit.value + " Here's my question. " + quest.value;   
    
    document.getelementById("warning").style.display = "none";
  }
  
}

// Dropdown

$('.dropdown-toggle').dropdown()

// Copy Function - http://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery

function copy(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


// Added as 'easter eggs'

  // Changes background (not currently active on page)
function changeColor() {
    var colors = ["#2672EC", "#97009F", "#094DB5", "#00A300", "#DA532C", "#AF1A3F", "#613CBC", "#008AD2"]
    var col = document.getElementById("jumbotronColor");
    col.style.backgroundColor = colors[Math.floor((Math.random()*8)+1)];
}

  // Turns screen into Asteroids
function game() {
  var name = prompt("Oh! You found me.. What is your name?");
  var questionOne = prompt("Hello " + name + "." + " Do you want to play a game?" + " Yes or No");
  var q1 = questionOne.toLowerCase();
  if (q1 === "yes" || "y") {
    var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://hi.kickassapp.com/kickass.js';void(0);
  } else {
    alert("Too bad, I wanted to play...");
  }
}
