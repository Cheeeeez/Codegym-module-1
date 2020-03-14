
function translateEtoV() {
    let english = ['apple', 'orange', 'banana', 'mango'];
    let vietnamese = ['quả táo', 'quả cam', 'quả chuối', 'quả xoài'];
    let input = document.getElementById('input_box').value;
    let index = english.indexOf(input);
    if (index === -1) {
        document.getElementById('result').innerHTML = "Không tìm thấy !";
    } else {
        document.getElementById('result').innerHTML = vietnamese[index];
    }
}