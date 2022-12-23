//Restart game button
var restart = document.querySelector("#b");

//Grabs all squares
var squares = document.querySelectorAll("td");

//clear all the squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

//check the square marker
// var cellOne = document.querySelector("#one")
//
// //cellOne.addEventListener("adds "X" when clicked on and adds blues to the "X")
//  cellOne.addEventListener("click", function(){
//    if (cellOne.textContent === "") {
//       cellOne.textContent = "x"
//    }else if (cellOne.textContent === "x") {
//       cellOne.textContent = "O"
//    }else {
//      cellOne.textContent = "";
//    }
//  })


//Generic version a.k.a shortcut version
function changeMarker(){
  if (this.textContent === "") {
    this.textContent = "x";
    this.style.color = "blue"
  }else if (this.textContent === "x") {
    this.textContent = "o";
    this.style.color = "red"
  }else {
    this.textContent = "";
  }
}


//For loop to add eventlisteners to all the squares.
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker)
}
