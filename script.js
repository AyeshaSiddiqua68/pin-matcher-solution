//first half generate 4 digit random pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {

        return getPin();

    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

//second half pin matching
//pin typing
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

//pin verification
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const failError = document.getElementById('notify-fail');
    const successMessage = document.getElementById('notify-success');
    if (pin == typedNumbers) {
        failError.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else {
        successMessage.style.display = 'none'
        failError.style.display = 'block';
    }
}

