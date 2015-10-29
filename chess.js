
var canvasGA = document.getElementById("gameArea");
canvasGA.addEventListener('click', processUserInput);
var contextGA = canvasGA.getContext("2d");

var cellSize = canvasGA.width/8;

var cells = new Array(8);
for(var i = 0; i < 8; i++)
  cells[i] = new Array(8);

setupBoard();
setTimeout(drawBoard, 100);

function setupBoard() {
  for(var r = 0; r < 8; r++) {
    for(var c = 0; c < 8; c++) {
      cells[r][c] = new Cell();
      //alternate square colors
      if((r+c)%2 == 0)
        cells[r][c].backgroundColor = "#b58863";
    }
  }
}

for(var blah = 0; blah < 8; blah++){
  cells[1][blah].piece = new Pawn("black");
  cells[6][blah].piece = new Pawn("white");
  cells[0][0].piece = new Rook("black");
  cells[0][7].piece = new Rook("black");
  cells[0][1]
}

function drawBoard() {
  for(var r = 0; r < 8; r++) {
    for(var c = 0; c < 8; c++) {
        contextGA.fillStyle = cells[r][c].backgroundColor;
        contextGA.fillRect(c*cellSize, r*cellSize, cellSize, cellSize);
        contextGA.drawImage(cells[r][c].piece.image, c*cellSize, r*cellSize, cellSize, cellSize);
    }
  }
}

function Cell() {
  this.backgroundColor = "#f0d9b5";
  this.piece = new EmptyPiece();
}

function EmptyPiece() {
  this.image = new Image();
  this.image.src = "piece-images/emptyPiece.png";
  this.playerColor = "none";
}

function Pawn(color) {
  this.playerColor = color;
  this.image = new Image();
  this.image.src = "piece-images/pawn-" + this.playerColor + ".png";
}

function Rook(color) {
  this.playerColor = color;
  this.image = new Image();
  this.image.src = "piece-images/rook-" + this.playerColor + ".png";
}

function Knight(color) {
  this.playerColor = color;
  this.image = new Image();
  this.image.src = "piece-images/pawn-" + this.playerColor + ".png";
}

function processUserInput(event) {
  console.log("stuff was clicked: " + (event.x - canvasGA.offsetLeft));
  drawBoard();
}
