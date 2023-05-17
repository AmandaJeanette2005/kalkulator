const btn = document.querySelectorAll('.btn');
const input = document.getElementById('input');
let number1 = null;
let number2 = null;
let operator = null;

console.log(btn.length);
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(e) {
        const value = e.target.innerText;

        if (value >= '0' && value <= '9') {
            if (number2 == null && operator !== null) {
                input.value = value;
                number2 = parseFloat(input.value);
            } else if (number2 == null) {
                input.value += value;
                number2 = parseFloat(input.value);
            } else {
                input.value += value;
                number2 = parseFloat(input.value);
            }
        }

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (number1 == null) {
                number1 = parseFloat(input.value);
                input.value = '';
            }
            operator = value;
        }

        if (value === 'C') {
            number1 = null;
            number2 = null;
            operator = null;
            input.value = '';
        }

        if (value === '=') {
            console.log(number1, number2);

            if (operator === '+') {
                operator = number1 + number2;
                input.value = operator;
            }
            if (operator === '-') {
                operator = number1 - number2;
                input.value = operator;
            }
            if (operator === '*') {
                operator = number1 * number2;
                input.value = operator;
            }
            if (operator === '/') {
                if (number2 !== 0) {
                    operator = number1 / number2;
                    input.value = operator;
                } else {
                    input.value = 'Error: Division by zero';
                }
            }
            
            number1 = null;
            number2 = null;
            operator = null;
        }
    });
}
