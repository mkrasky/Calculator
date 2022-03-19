let operatorOrder = [];
let numberOrder = [];

function plus() {
    const input = document.getElementById('current-input');
    const equationHolder = document.getElementById('equation-holder');

    numberOrder.push(input.innerHTML);
    operatorOrder.push('+');

    input.innerHTML += '+';

    equationHolder.innerHTML += input.innerHTML;
    input.innerHTML = '';
}

function minus() {
    const input = document.getElementById('current-input');
    const equationHolder = document.getElementById('equation-holder');

    numberOrder.push(input.innerHTML);
    operatorOrder.push('-');

    input.innerHTML += '-';

    equationHolder.innerHTML += input.innerHTML;
    input.innerHTML = '';
}

function multi() {
    const input = document.getElementById('current-input');
    const equationHolder = document.getElementById('equation-holder');

    numberOrder.push(input.innerHTML);
    operatorOrder.push('*');

    input.innerHTML += '*';

    equationHolder.innerHTML += input.innerHTML;
    input.innerHTML = '';
}

function divide() {
    const input = document.getElementById('current-input');
    const equationHolder = document.getElementById('equation-holder');

    numberOrder.push(input.innerHTML);
    operatorOrder.push('/');

    input.innerHTML += '/';

    equationHolder.innerHTML += input.innerHTML;
    input.innerHTML = '';
}

function one() {
    const input = document.getElementById('current-input');

    input.innerHTML += '1'
}

function two() {
    const input = document.getElementById('current-input');

    input.innerHTML += '2'
}

function three() {
    const input = document.getElementById('current-input');

    input.innerHTML += '3'
}

function four() {
    const input = document.getElementById('current-input');

    input.innerHTML += '4'
}

function five() {
    const input = document.getElementById('current-input');

    input.innerHTML += '5'
}

function six() {
    const input = document.getElementById('current-input');

    input.innerHTML += '6'
}

function seven() {
    const input = document.getElementById('current-input');

    input.innerHTML += '7'
}

function eight() {
    const input = document.getElementById('current-input');

    input.innerHTML += '8'
}

function nine() {
    const input = document.getElementById('current-input');

    input.innerHTML += '9'
}

function zero() {
    const input = document.getElementById('current-input');

    input.innerHTML += '0'
}

function dec() {
    const input = document.getElementById('current-input');

    input.innerHTML += '.'
}

function backspace() {
    let totalInput = document.getElementById('current-input').innerHTML;
    const input = document.getElementById('current-input');

    totalInput = totalInput.slice(0, -1);
    input.innerHTML = totalInput;
}

function clearAll() {
    const input = document.getElementById('current-input');
    const equationHolder = document.getElementById('equation-holder');

    input.innerHTML = '';
    equationHolder.innerHTML = '';
    numberOrder = [];
    operatorOrder = [];
}

function enter() {
    const input = document.getElementById('current-input');
    const equationHolder = document.getElementById('equation-holder');
    let temp;

    numberOrder.push(input.innerHTML);

    equationHolder.innerHTML += input.innerHTML;
    input.innerHTML = '';

    numberOrder = numberOrder.map(Number);

    for (i=0; i < operatorOrder.length; i++) {
        if (operatorOrder[i] === '*' || operatorOrder[i] === '/') {
            if (operatorOrder[i] === '*') {
                temp = numberOrder[i] * numberOrder[i+1];
            } else if (operatorOrder[i] === '/') {
                temp = numberOrder[i] / numberOrder[i+1];
            }
            numberOrder.splice(i, 2, temp);
            operatorOrder.splice(i, 1);
            i--;
        }
    }

    for (i=0; i < operatorOrder.length; i++) {
        if (operatorOrder[i] === '+' || operatorOrder[i] === '-') {
            if (operatorOrder[i] === '+') {
                temp = numberOrder[i] + numberOrder[i+1];
            } else if (operatorOrder[i] === '-') {
                temp = numberOrder[i] - numberOrder[i+1];
            }
            numberOrder.splice(i, 2, temp);
            operatorOrder.splice(i, 1);
            i--;
        }
    }

    input.innerHTML = numberOrder;
}


document.addEventListener('keydown', function(event) {

    switch(event.key) {
        case '1':
            one();
            break;
        case '2':
            two();
            break;
        case '3':
            three();
            break;
        case '4':
            four();
            break;
        case '5':
            five();
            break;
        case '6':
            six();
            break;
        case '7':
            seven();
            break;
        case '8':
            eight();
            break;
        case '9':
            nine();
            break;
        case '0':
            zero();
            break;
        case '+':
            plus();
            break;
        case '-':
            minus();
            break;
        case '*':
            multi();
            break;
        case '/':
            divide();
            break;
        case 'Enter':
            enter();
            break;
        case '.':
            dec();
            break;
        case 'Backspace':
            backspace();
            break;
    }

});