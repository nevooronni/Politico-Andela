// Get the modal
var modal = document.getElementById('myModal');
var editModal = document.getElementById('myModal2');
var deleteModal = document.getElementById("myModal3");
var voteModal = document.getElementById("myModal4");

// Get the button that opens the modal
var btn = document.getElementById("createparty");
var btn2 = document.getElementById("edit");
var btn3 = document.getElementById("trash");
var btn4 = document.getElementById("votebutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3  = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  editModal.style.display = "block";
}

btn3.onclick = function() {
  deleteModal.style.display = "block";
}

btn4.onclick = function() {
  voteModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  editModal.style.display = "none";
}

span3.onclick = function() {
  deleteModal.style.display = "none";
}

span4.onclick = function() {
  voteModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}