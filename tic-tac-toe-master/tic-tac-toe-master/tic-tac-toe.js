/*Exercise 1*/
document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    console.log("Board:", board);

    const squares = board.querySelectorAll("div");
    console.log("Squares found:", squares.lenght);

    let options = ["", "", "" , "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    squares.forEach(function (square, index) {
        square.classList.add("square");
        
        square.addEventListener("click", function() {
            if (options[index] == ""){
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                
                options[index] = currentPlayer;
                
                if (currentPlayer === "X"){
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
            }
        });
    });
});
