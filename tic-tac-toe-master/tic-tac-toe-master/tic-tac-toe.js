
document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    const squares = board.querySelectorAll("div");

    squares.forEach(function (square) {
        square.classList.add("square");
    });

});