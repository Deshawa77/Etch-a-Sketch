const container = document.getElementById("grid-container");

function makeGrid() {
    for (let r = 0; r < 16; r++) {
        // Create a row container
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let c = 0; c < 16; c++) {
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

makeGrid();