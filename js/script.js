// ticketPop function, for ticket input to appear
// http://stackoverflow.com/questions/26709969/call-javascript-function-onchange-event-of-dropdown-list

// function ticketPop() {
//   if(document.getElementById('contact').value === "Ticket") {
//     document.getElementById("ticketSlot").style.visibility = "visible";
//   } else {
//     document.getElementById("ticketSlot").style.visibility = "hidden";
//   };
// };

// Generate Function

function generate() {
  var contact = document.getElementById("contact");
  var ticket = document.getElementById("ticket");
  var role = document.getElementById("role");
  var stage = document.getElementById("stage");
  var name = document.getElementById("name");
  var loan = document.getElementById("loan");
  var channel = document.getElementById("channel");
  var sit = document.getElementById("sit");
  var quest = document.getElementById("steps");
  var quest = document.getElementById("quest");

  // Easter Egg
  if (document.getElementById("name").value === "Jason Krauss") {
    document.getElementById("jumbo").style.backgroundImage =
      "url('img/hulkKrauss.jpg')";
  } // /Easter Egg

  if (
    document.getElementById("contact").value === "Please Select" ||
    document.getElementById("name").value === "" ||
    document.getElementById("role").value === "Please Select" ||
    document.getElementById("loan").value === "" ||
    document.getElementById("channel").value === "Please Select" ||
    document.getElementById("stage").value === "" || // Altered due to dropdown being temp disabled
    document.getElementById("sit").value === "" ||
    document.getElementById("quest").value === "" ||
    document.getElementById("steps").value === ""
  ) {
    document.getElementById("warning").style.visibility = "visible";
  } else {
    document.getElementById("request").innerHTML =
      "Contact: " +
      contact.value +
      "\n" +
      "Ticket #: " +
      ticket.value +
      "\n" +
      "Name: " +
      name.value +
      "\n" +
      "Role: " +
      role.value +
      "\n" +
      "Loan #: " +
      loan.value +
      "\n" +
      "Channel: " +
      channel.value +
      "\n" +
      "Loan Stage: " +
      stage.value +
      "\n" +
      "Why is the user contacting H2O support? " +
      sit.value +
      "\n" +
      "Specific steps taken to troubleshoot: " +
      steps.value +
      "\n" +
      "My question to the senior analyst is: " +
      quest.value;

    document.getElementById("warning").style.visibility = "hidden";
  }
}

// Dropdown

$(".dropdown-toggle").dropdown();

// Copy Function - https://www.w3schools.com/howto/howto_js_copy_clipboard.asp?fbclid=IwAR0gzpmVS0Z0v4UqpDm2WMFeFmrVcmV_2Kj-6FD_YwuRYJ-PMua3AZppbZc

function copyFunction() {
  /* Get the text field */
  var copyText = document.getElementById("request");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Text copied!");
}

// Added as 'easter eggs'

// Changes background (not currently active on page)
function changeColor() {
  var colors = [
    "#2672EC",
    "#97009F",
    "#094DB5",
    "#00A300",
    "#DA532C",
    "#AF1A3F",
    "#613CBC",
    "#008AD2"
  ];
  var col = document.getElementById("jumbotronColor");
  col.style.backgroundColor = colors[Math.floor(Math.random() * 8 + 1)];
}
