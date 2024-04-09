let display = document.getElementById('inputBox');
let calculator = document.querySelector('.calculator');

calculator.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        let buttonValue = event.target.textContent;

        if (buttonValue === '=') {
            calculate();
        } else if (buttonValue === 'AC') {
            clearDisplay();
        } else if (buttonValue === 'DEL') {
            deleteLastCharacter();
        } else {
            appendToDisplay(buttonValue);
        }
    }
});

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        if (result === Infinity || isNaN(result)) {
            throw new Error('Invalid expression');
        }
        display.value = result;
    } catch (error) {
        display.value = error.message;
    }
}
