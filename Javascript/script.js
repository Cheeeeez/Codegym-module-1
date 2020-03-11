

function clickButton(obj) {
    let result = document.getElementById('input');
    result.value +=obj;
}
function calculate() {
    let result = document.getElementById('input');
    result.value = eval(result.value);
}
function clearAll() {
    let result = document.getElementById('input');
    result.value = null;
}
function deleteOneCharacter() {
    let result = document.getElementById('input');
    
}

