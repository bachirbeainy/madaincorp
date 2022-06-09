var playerturn = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;
let playerWon = false;
//There are 2 bugs that need to be fixed 
function placeMarker(boxnumber, index) {
    if (!isGameActive)
        alert("Game Over ...Start a new Game");

    else {

        if (playerturn == 'X' && !document.getElementById(boxnumber).desabled && isGameActive) {
            document.getElementById(boxnumber).value = "X";

            board[index] = 'X';
            checkResult();

            if (!playerWon) {
                playerturn = 'O';
                document.getElementById('role').textContent = " Player O ... it's your move!"
                document.getElementById(boxnumber).style.backgroundColor = "aqua";
            }
            
            document.getElementById(boxnumber).desabled = true;
            if (!board.includes(""))
                document.getElementById('role').textContent = "It's a TIE Game!";

        }

        if (playerturn == 'O' && !document.getElementById(boxnumber).desabled && isGameActive) {
            document.getElementById(boxnumber).value = "O";

            board[index] = 'O';
            checkResult();

            if (!playerWon) {
                playerturn = 'X';
                document.getElementById('role').textContent = " Player X ... it's your move!";
                document.getElementById(boxnumber).style.backgroundColor = "aquamarine";
            }
            
            document.getElementById(boxnumber).desabled = true;
            if (!board.includes(""))
                document.getElementById('role').textContent = "It's a TIE Game!";

        }
    }


}

function restart() {
    for (let i = 1; i < 10; i++) {
        let box = document.getElementById("box" + i.toString());
        box.value = null;
        box.style.backgroundColor = "white";
        //box.addEventListener("mouseover", hoverStyle(i));
        
        box.desabled = false;
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        playerWon = false;
        document.getElementById('role').textContent = " Player X ... it's your move!";
    }
}
function hoverStyle()
{
   
    document.getElementById("box"+index).style.backgroundColor="lightskyblue";
}

function checkResult() {

    const conditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < 8; i++) {

        const a = board[conditions[i][0]];
        const b = board[conditions[i][1]];
        const c = board[conditions[i][2]];

        if (a == "" || b == "" || c == "") {
            continue;
        }

        if (a == b && b == c) {
            isGameActive = false;
            playerWon = true;
            document.getElementById('role').textContent = "Player " + playerturn + " Won!";
            conditions[i].forEach(function(number){
                let boxindex = number+1;
                document.getElementById("box"+ boxindex).style.backgroundColor="#d11984";
            });
            
            break;
        }

    }

}

