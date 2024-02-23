const gameBoard = (function initGameBoard() {
    const boardGrid = [
        [0, 0, 0],
        [, 1, 1 ],
        [1, 0 , 1],
    ];
    let turnCounter = 2;
    return {boardGrid, turnCounter};
})();

console.log(gameBoard.turnCounter);
function controlGameFlow() {

    function checkForTie() {
        //turnCounter >= 9
    }

    function checkWinConditions() {
        const r1 = gameBoard.boardGrid[0][0] + gameBoard.boardGrid[0][1] + gameBoard.boardGrid[0][2];
        const r2 = gameBoard.boardGrid[1][0] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[1][2];
        const r3 = gameBoard.boardGrid[2][0] + gameBoard.boardGrid[2][1] + gameBoard.boardGrid[2][2];
        const c1 = gameBoard.boardGrid[0][0] + gameBoard.boardGrid[1][0] + gameBoard.boardGrid[2][0];
        const c2 = gameBoard.boardGrid[0][1] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[2][1];
        const c3 = gameBoard.boardGrid[0][2] + gameBoard.boardGrid[1][2] + gameBoard.boardGrid[2][2];
        const d1 = gameBoard.boardGrid[0][0] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[2][2];
        const d2 = gameBoard.boardGrid[2][0] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[0][2];
    
        if ((r1 === 0) || (r1 === 3)) {
            if(r1 === 0) {
                return console.log('player1 wins');
            } else if (r1 === 3) {
               return console.log('player2 wins')
            };
        } else if ((r2 === 0) || (r1 === 3)) {
                if(r2 === 0) {
                    return console.log('player1 wins');
                } else if (r2 === 3) {
                    return console.log('player2 wins')
                };
        } else if ((r3 === 0) || (r3 === 3)) {
                if(r3 === 0) {
                    return console.log('player1 wins');
                } else if (r3 === 3) {
                    return console.log('player2 wins')
                };
        } else if ((c1 === 0) || (r1 === 3)) {
            if(c1 === 0) {
                return console.log('player1 wins');
            } else if (c1 === 3) {
                return console.log('player2 wins')
            };
        } else if ((c2 === 0) || (c3 === 3)) {
            if(c2 === 0) {
                return console.log('player1 wins');
            } else if (c2 === 3) {
                return console.log('player2 wins')
            };
        } else if ((c3 === 0) || (c3 === 3)) {
            if(c3 === 0) {
                return console.log('player1 wins');
            } else if (c3 === 3) {
                return console.log('player2 wins')
            };
        } else if ((d1 === 0) || (d1 === 3)) {
            if(d1 === 0) {
                return console.log('player1 wins');
            } else if (d1 === 3) {
                return console.log('player2 wins')
            };
        } else if ((d2 === 0) || (d2 === 3)) {
            if(d2 === 0) {
                return console.log('player1 wins');
            } else if (d2 === 3) {
                return console.log('player2 wins')
            };
        } else {
            return console.log('tie');
            //return checkForTie();
        };
    }
    return{checkWinConditions};
}

function controlBoardDisplay() {
    const boardGridDisplay = document.querySelectorAll('.gameboard > div');
    let turnCounter = gameBoard.turnCounter;
    function writeMarkValues () {
        if (turnCounter % 2 === 0) {
        //elements of an array  or  array-like structure are considered objects
            this.innerText = 'X';
            this.removeEventListener('click', writeMarkValues);
        } else {
            this.innerText = 'O';
            this.removeEventListener('click', writeMarkValues);
        };
        return turnCounter++;
    }
    function handlePlayerInput() {
        boardGridDisplay.forEach(element => {
           element.addEventListener('click', writeMarkValues)
        });
        console.log(boardGridDisplay);
    }
    handlePlayerInput();
}

controlBoardDisplay();

const winCondition = controlGameFlow();
winCondition.checkWinConditions();
