const sketchpad = document.querySelector(".sketchpad");
const drawingBoard = document.querySelector(".drawing-board");

//default size: 16x16
let area = 256; 
// generateBoard(area);

const userInput = document.querySelector(".user-input");
const button = document.querySelector("#select-button");
button.addEventListener("click", getBoardSide);

const removeButton = document.querySelector("#remove-button");
removeButton.addEventListener("click", (e) => {
    const squares = document.querySelectorAll(".drawing-board > .drawing-square");
    squares.forEach(square => square.remove());
});

const warning = document.createElement('div');
warning.setAttribute("id", "warning");
warning.classList.add("hidden");
userInput.appendChild(warning);  
warning.innerText = "(The value you have input is not supported)";

function getBoardSide() {
    //input tag always returns a string
    let boardSide = document.getElementById("board-side").value;
    
    //prevent multiple clicking with invalid value
    warning.classList.add("hidden");
    if (typeof +boardSide !== "number"|| !Number.isInteger(+boardSide) || boardSide < 0 || boardSide > 100) {
        warning.classList.remove("hidden");
        return;
    }
    area = boardSide*boardSide;
    generateBoard(area);
}

function generateBoard(area) {
    let newSide = Math.sqrt((960*960)/area); 
    for (let i = area; i > 0; i--) {
        const drawingSquare = document.createElement("div"); 
        drawingBoard.appendChild(drawingSquare);   
        drawingSquare.classList.add("drawing-square");
        drawingSquare.style.cssText = `width: ${newSide}px; height: ${newSide}px;`;
    }

    //track the mouse. We have to include this specifically in this function, otherwise including this on global scope can only only track the default drawing board of 16x16     
    const squares = document.querySelectorAll(".drawing-square");
    squares.forEach(square => square.addEventListener("mouseenter", (e) => {
    square.classList.add("color-black");
    }));
}



