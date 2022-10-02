const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const templeresultEl = document.querySelector('.temp-result');
const numberEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal-sign');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-clear-all');
const themButtom = document.querySelector('.theme')
const bodyElement = document.body


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
})

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation()
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName)
        lastOperation = operationName

    })
})

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    templeresultEl.innerText = result;
}


function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    }
}

equalEl.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) result;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    templeresultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    templeresultEl.innerText = '0';
});


clearLastEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    dis2Num = ''
});

window.addEventListener('keydown', (e) => {
    if (e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.') {
        clickButtonElement(e.key)
    } else if (

        e.key === '/' ||
        e.key === '+' ||
        e.key === '-') {
        clickOperation(e.key)
    } else if (e.key === '*') {
        clickOperation('X')
    } else if (e.key === 'Enter' || e.key === '=') {
        clickEqual(e.key)
    }
});

function clickButtonElement(key) {
    numberEl.forEach(button => {
        if (button.innerText == key) {
            button.click()
        }
    })
}


function clickOperation(key) {
    operationEl.forEach(button => {
        if (button.innerText === key) {
            button.click()
        }
    })
}

function clickEqual() {
    equalEl.click()
}



themButtom.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode')
});