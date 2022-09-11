// useable common function create

function displayNone(id) {
    document.getElementById(id).style.display = 'none';
}

function displayBlock(id) {
    document.getElementById(id).style.display = 'block';
}

function emptyValue(id) {
    document.getElementById(id).value = "";
}

// Random number generate function
function randomNumFun() {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('randomNum').value = randomNumber;

    emptyValue('inputPin')
}






// input humber value
function btnKey(id) {
    let prevValue = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = prevValue + key;
}
function clearDisplay() {
    document.getElementById('inputPin').value = "";
}

function clearLastNum() {
    var inputResult = document.getElementById('inputPin').value;
    var removeValue = inputResult.slice(0, inputResult.length -1);
    document.getElementById('inputPin').value = removeValue;
}

// Submit button (pin matching and unmatching condition)
function submitBtn() {
    var randNumber = document.getElementById('randomNum').value;
    var inputNum = document.getElementById('inputPin').value;
    if (randNumber == inputNum) {
        displayBlock('matched')
    }

    else {
        displayBlock('unmatched')
    }
}
document.getElementById('generateBtn').addEventListener('click', function(){
    document.getElementById('matched').style.display = 'none';
    document.getElementById('unmatched').style.display = 'none';
});