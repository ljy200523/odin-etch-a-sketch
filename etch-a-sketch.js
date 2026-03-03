
const initialSqaures = 16;

const container = document.querySelector("#container");
for (let i = 0; i < initialSqaures; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < initialSqaures; j++) {
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

const submitButton = document.querySelector("button");
submitButton.addEventListener("click", function(value) {
    const numberOfSquares = document.querySelector('input').value;
    console.log(numberOfSquares);
})

console.log("after");

