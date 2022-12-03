 document .getElementById('button').addEventListener("click",function() {

 alert("I was clciked!");

});
let input = document.getElementById('button');

function addingEventListener( clickAlert ) {
  alert('I was clicked!');
input.addEventListener('input', addingEventListener);
}
