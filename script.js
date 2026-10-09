const container = document.getElementById("grid-container");

for (let r = 0; r < 16; r++) {
    // Create a row container
    const row = document.createElement("div");
    row.classList.add("grid-row"); // Style this with display: flex; in CSS

    for (let c = 0; c < 16; c++) {
        // Create 16 column cells inside each row
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        row.appendChild(cell);
    }
    
    container.appendChild(row);
}
