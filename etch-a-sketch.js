
const initialSqaures = 16;
let numberOfSquares = initialSqaures;

const container = document.querySelector("#container");

function getRandomRGB(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let red = Math.floor(Math.random() * (max - min + 1)) + min; 
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    let blue = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgb(${red}, ${green}, ${blue})`;
}

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
            event.target.style.backgroundColor = getRandomRGB(0, 255);
            console.log("Mouse Entered");
            console.log(event.currentTarget);
        });
        divs.addEventListener("mouseleave", function(event) {
            setTimeout(() => event.target.style.backgroundColor = "", 2000);
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

