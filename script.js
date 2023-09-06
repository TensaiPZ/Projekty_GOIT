let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector('#color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButton = document.querySelectorAll('.mode');
let easyButton = document.querySelector('.mode');

let numSquares = 6;
let colors = [];
let pickedColor;

init();

// funkcja inicjalizujaca
function init() {
    // ustanienie tekstu jaki kolor szukamy
    setupSquares();
    // tryb gry
    // przycisk resetowania
}


function setupSquares(){
    for (let i = 0; i < squares.length; i++){
        squares[i].computedStyleMap.backgroundColor = colors[i];
        squares[i].addEventListener('click', function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){

                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play again";

            }

            else{

                messageDisplay.textContent = "Try again";
            }

            
        });
    }
}

function chooseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors [random]; 
}