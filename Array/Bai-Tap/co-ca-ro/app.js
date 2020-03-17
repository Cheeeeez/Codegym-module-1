const DEFAULT_ROW = 5;
const DEFAULT_COLUMN = 5;
let arr = []

function drawGameBoard() {
    let html = '';
    for (let i = 0; i < DEFAULT_ROW; i++) {
        html += "<tr>";
        for (let j = 0; j < DEFAULT_COLUMN; j++) {
            arr[i][j] = "*";
            html += "<td id='"+ i + ' - ' + j +"' onclick='play(this)'></td>";
        }
        html += "</tr>"
    }
    document.getElementById('game-board').innerHTML = html;
}

function play() {

}
drawGameBoard();