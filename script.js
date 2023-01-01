let column = 0;
let row = 0;
for (let i = 0; i < 16; i++) {
    var div0 = document.createElement("div");
    //div0.textContent = "div";
    div0.setAttribute("id", "column-" + column)
    document.querySelector("#container").appendChild(div0);

    for (let i = 0; i < 16; i++) {
        var div1 = document.createElement("div");
        div1.textContent = "x";
        div1.setAttribute("id", "row-" + row)
        div1.setAttribute("class", "box");
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
        setTimeout(() => {
            event.target.style.backgroundColor = "";
        }, 1000);
    })
})

