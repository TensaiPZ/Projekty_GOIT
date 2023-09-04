input = document.getElementById('input');
number = document.querySelectorAll('.numbers div');
operator = document.querySelectorAll('.operators div');
result = document.getElementById('result');
clear = document.getElementById('clear');
resultDisplayed = false;

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(e){

        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        if (resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        } 
        else if (resultDisplayed === true && lastChar === '+' && lastChar === '-' && lastChar === '×' && lastChar === '÷'){
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } 
        else {
            resultDisplayed = false;
            input.innerHTML = '';
            input.innerHTML += e.target.innerHTML;
        }
    });
}
for (let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(e){
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];
        if (lastChar === '+' || lastChar === '-' || lastChar === '×' || lastChar === '÷'){
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            console.log("Podaj najpierw liczbe, nie zaczynaj od operatora :>")
        } else {
            input.innerHTML += e.target.innerHTML;
        }
    });
}



