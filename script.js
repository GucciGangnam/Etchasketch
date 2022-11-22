let color = 'black'





function boardSize(size) { 

  let board = document.querySelector('.board')
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`
  board.style.gridTemplateRows = `repeat(${(size * 0.75)} , 1fr)`


  let amount = size * (size * 0.75); 
  for (let i = 0; i<amount; i++){ 
    let square = document.createElement("div");
    square.addEventListener('mouseover', colorSquare)
    square.style.backgroundColor = "antiquewhite";
    square.style.border = "1px solid rgb(232, 214, 192)";
    board.insertAdjacentElement("beforeend", square);
  }
}

boardSize(64);

function changeSize(input) { 
  boardSize(input);
} 

function colorSquare () { 
  if (color == "rainbow") { 
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;}
}


function changeColor(buttonColor) { 
  color = buttonColor;
}

 function resetBoard() { 
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares. forEach((div) => div.style.backgroundColor = 'antiquewhite');
  
 }