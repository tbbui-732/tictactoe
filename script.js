const grids = document.getElementsByClassName("grid");  // Grab all grid divs

let flip = true;                                        // Switch between players (temporary)

Array.prototype.forEach.call(grids, (grid) => {         // Add event listener to each grid.
    grid.addEventListener("click", () => {              // Mark with "x" or "o" when clicked.
        if (!grid.innerText) {
            if (flip) {
                grid.innerText = "x";
                flip = false;
            } else {
                grid.innerText = "o";
                flip = true;
            }
        }
    });    
});

