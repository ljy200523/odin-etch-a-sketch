
const initialSqaures = 16;
let numberOfSquares = initialSqaures;

const container = document.querySelector("#container");

function refreshGrid() {
    container.innerHTML = '';
    for (let i = 0; i < numberOfSquares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.height = `${100/numberOfSquares}%`;
        container.appendChild(row);
        for (let j = 0; j < numberOfSquares; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    const totalDivs = document.querySelectorAll(".column");
    totalDivs.forEach(divs => {
        divs.addEventListener("mouseenter", function(event) {
            event.target.style.backgroundColor = "blue";
            console.log("Mouse Entered");
            console.log(event.currentTarget);
        });
        divs.addEventListener("mouseleave", function(event) {
            event.target.style.backgroundColor = "";
            console.log("Mouse Left");
        });
    });
}

refreshGrid()


const submitButton = document.querySelector("button");
submitButton.addEventListener("click", function(event) {
    numberOfSquares = prompt("Number of squares: ");
    if (numberOfSquares > 100) numberOfSquares = 100;
    else if (numberOfSquares < 1) numberOfSquares = 1;
    event.preventDefault();
    console.log(numberOfSquares);
    refreshGrid();
})

console.log("after");

