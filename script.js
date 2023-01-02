function createGrid() {
    let column = 0;
    let row = 0;
    for (let i = 0; i < gridSize; i++) {
        var div0 = document.createElement("div");
        //div0.textContent = "div";
        div0.setAttribute("id", "column-" + column)
        document.querySelector("#container").appendChild(div0);

        for (let i = 0; i < gridSize; i++) {
            var div1 = document.createElement("div");
            div1.setAttribute("id", "row-" + row)
            div1.setAttribute("class", "box");
            div1.style.width = ((512 / gridSize).toString() + "px");
            document.querySelector("#column-" + column).appendChild(div1);
            row++;
        }
        column++;
        row = 0;
    }

    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "orange";
            /* setTimeout(() => {
                event.target.style.backgroundColor = "";
            }, 1000); */
        })
    })
}

function clearGrid() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    })
}


let gridSize = 16;
document.querySelector("button").addEventListener("click", (event) => {
    gridSize = prompt("Enter grid size", gridSize);
    if (gridSize == null || gridSize == "") {
        alert("Please enter a grid size");
    } else if (gridSize > 100) {
        alert("Grid size cannot exceed 100");
    } else {
        clearGrid();
        createGrid();
    }
})

createGrid();