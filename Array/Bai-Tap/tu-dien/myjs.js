
function translateEtoV() {
    let english = ['apple', 'orange', 'banana', 'mango'];
    let vietnamese = ['quả táo', 'quả cam', 'quả chuối', 'quả xoài'];
    let input = document.getElementById('input_box').value;
    let check = english.indexOf(input);
    if (check === -1) {
        document.getElementById('result').innerHTML = "Không tìm thấy !";
    } else {
        document.getElementById('result').innerHTML = vietnamese[check];
    }
    console.log(check);
// }
//     let index = findIndex(english, input);
//     if (index !== -1) {
//         document.getElementById('result').innerHTML = vietnamese[index];
//     } else {
//         document.getElementById('result').innerHTML = "Không tìm thấy !";
//     }
}

// function findIndex(language,keyword) {
//     for (let i = 0; i < language.length; i++) {
//         if (keyword === language[i])
//             return i;
//     }
//     return -1;
// }

