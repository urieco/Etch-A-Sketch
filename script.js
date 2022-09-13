const sketchpad = document.querySelector(".sketchpad");
const drawingBoard = document.querySelector(".drawing-board");

//default size: 16x16
let area = 256;

const userInput = document.querySelector(".user-input");
const button = document.querySelector("#select-button");
button.addEventListener("click", getBoardSide);

const randomizeColorButton = document.querySelector("#randomize-color");
const shadesOfBlackButton = document.querySelector("#shades-of-black");

let randomize = false;
let shade = false;

randomizeColorButton.addEventListener("click", (e) => {
    randomize = true;
    shade = false;
    randomizeColorButton.classList.add("selected");
    shadesOfBlackButton.classList.remove("selected");
});
shadesOfBlackButton.addEventListener("click", (e) => {
    randomize = false;
    shade = true;
    shadesOfBlackButton.classList.add("selected");
    randomizeColorButton.classList.remove("selected");
});

const warning = document.createElement('div');
warning.setAttribute("id", "warning");
warning.classList.add("hidden");
userInput.appendChild(warning);
warning.innerText = "(The value you have input is not supported)";

function getBoardSide() {
    removeBoard();
    //input tag always returns a string
    let boardSide = document.getElementById("board-side").value;

    //prevent multiple clicking with invalid value
    warning.classList.add("hidden");
    if (typeof +boardSide !== "number" || !Number.isInteger(+boardSide) || boardSide < 0 || boardSide > 100) {
        warning.classList.remove("hidden");
        return;
    }
    area = boardSide * boardSide;
    generateBoard(area);
}

function generateBoard(area) {
    let newSide = Math.sqrt((960 * 960) / area);
    for (let i = area; i > 0; i--) {
        const drawingSquare = document.createElement("div");
        drawingBoard.appendChild(drawingSquare);
        drawingSquare.classList.add("drawing-square");

        const root = document.querySelector(":root");
        const rootStyles = getComputedStyle(root);
        root.style.setProperty("--squarewidth", `${newSide}px`);
        root.style.setProperty("--squareheight", `${newSide}px`);
    }

    // Track the mouse. We have to include this declaration specifically in this function. Declaring this on global scope causes functions to stop working. Therefore, a redeclaration has to be made for function removeBoard().
    const squares = document.querySelectorAll(".drawing-square");

    if (!randomize && !shade) {
        squares.forEach(square => square.addEventListener("mouseenter", (e) => {
            square.classList.add("color-black");
        }));
    } else if (randomize) {
        squares.forEach(square => square.addEventListener("mouseenter", randomizeColor));

        //let the squares keep the colors assigned when the mouse first passed through
        squares.forEach(square => square.addEventListener("mouseleave", (e) => square.removeEventListener("mouseenter", randomizeColor)));
    } else if (shade) {
        squares.forEach(square => square.addEventListener("mouseenter", shadesOfBlack));
        squares.forEach(square => square.addEventListener("mouseleave", (e) => square.removeEventListener("mouseenter", shadesOfBlack)));
    }
}

function removeBoard() {
    const squares = document.querySelectorAll(".drawing-board > .drawing-square");
    squares.forEach(square => square.remove());
}

function randomizeColor() {
    let rgbRed = Math.floor(Math.random() * 256);
    let rgbGreen = Math.floor(Math.random() * 256);
    let rgbBlue = Math.floor(Math.random() * 256);
    this.style.cssText = `background-color: rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
}

let alpha = 0;
let alphaAdd = 1;
let alphaMax = 1;

function shadesOfBlack() {
    if (alpha >= 0) {
        alpha = (alpha * 10 + alphaAdd) / 10;
        if (alpha >= alphaMax) alphaAdd = -1;
        if (alpha <= 0) alphaAdd = 1;
    }
    this.style.cssText = `background-color: rgb(0, 0, 0); opacity: ${alpha};`;
}

