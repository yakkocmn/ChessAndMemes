
var canvas = document.getElementbyId("gameArea");
canvasGA.addEventListener( 'click', processUserInput);
var contextGA = canvasGA.getContext("2d");




function processUserInput(event) {
  console.log("stuff was clicked: " + (event.x - canvasGA.offsetLeft));
}
