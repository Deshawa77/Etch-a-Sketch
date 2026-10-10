const container = document.getElementById("grid-container");

function makeGrid(num) {
    for (let r = 0; r < num; r++) {
        // Create a row container
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let c = 0; c < num; c++) {
            // Create a cell
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            
            // Change color when the mouse enters
            cell.addEventListener("mouseenter", () => {
                cell.classList.add("hovered");
            });

            // Change color when the mouse leaves
            cell.addEventListener("mouseleave", () => {
                cell.classList.remove("hovered");
            });

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function changeGrid() {
    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        const inputField = prompt("Enter the size of the grid (1–100)");

        if (inputField === null) return;

        const size = Number(inputField);

        if (!Number.isInteger(size) || size < 1 || size > 100) {
            alert("Please enter a whole number between 1 and 100.");
            return;
        }
        container.style.setProperty("--grid-size", size);
        container.innerHTML = "";
        makeGrid(size);

    });
}

makeGrid(16);
changeGrid();