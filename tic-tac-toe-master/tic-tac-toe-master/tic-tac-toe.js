/*Exercise 1*/
document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    console.log("Board:", board);

    const squares = board.querySelectorAll("div");
    console.log("Squares found:", squares.length);

    const status = document.querySelector("#status");
    let options = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function (square, index) {
        square.classList.add("square");

        square.addEventListener("mouseenter", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });

        square.addEventListener("click", function () {
            if (options[index] === "") {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                options[index] = currentPlayer;

                const winner = winningPatterns.some(function (combination) {
                    return combination.every(function (position) {
                        return options[position] === currentPlayer;
                    });
                });

                if (winner) {
                    status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    status.classList.add("you-won");
                    return;
                }

                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });

    const restart = document.querySelector(".btn");
    restart.addEventListener("click", function () {
        options = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";

        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        status.textContent = "Move you mouse over a square and click to play an X or O.";
        status.classList.remove("you-won");
    });
});

