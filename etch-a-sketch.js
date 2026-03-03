
const numberOfSquares = document.querySelector("numberOfSquares");
console.log(numberOfSquares);

const container = document.querySelector("#container");
for (let i = 0; i < numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
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

console.log("after");

