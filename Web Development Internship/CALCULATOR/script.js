let display = document.getElementById('inputBox');
let calculator = document.querySelector('.calculator');
let buttons = document.querySelectorAll('button');

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

buttons.forEach(button => {
    button.addEventListener('mousedown', function () {
        this.classList.add('active');
    });

    button.addEventListener('mouseup', function () {
        this.classList.remove('active');
    });
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
