


let boardSize = 8;
let board = "";

for (let boardRow = 0; boardRow < boardSize; boardRow++) {

    for (let boardColumn = 0; boardColumn < boardSize; boardColumn++) {

        if ((boardRow + boardColumn) % 2 === 0) {

            board += " ";
            
        } else {

            board += "□";

        }       

    }

    board += "\n";

}

console.log(board);