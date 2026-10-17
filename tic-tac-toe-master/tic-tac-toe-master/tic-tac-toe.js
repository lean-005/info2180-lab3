/*Exercise 1*/
document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    console.log("Board:", board);

    const squares = board.querySelectorAll("div");
    console.log("Squares found:", squares.length);

    let options = ["", "", "" , "", "", "", "", "", ""];
    let currentPlayer = "X";

    
        
        
    squares.forEach(function (square, index) {
        square.classList.add("square");
        
        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

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



