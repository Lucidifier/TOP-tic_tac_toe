const gameBoard = (function() {
    const boardGrid = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];
    let turnCounter = 2;
    return {boardGrid, turnCounter};
})();

const players =  (function () {
    function player(mark, name, highlight) {
        let playerMark = mark;
        let playerName = name;
        let playerWinStatus = false;
        let playerHighlight = highlight;
        return {playerMark, playerName, playerWinStatus, playerHighlight};
    }

    const player1 = player('X', 'jedan', true);
    const player2 = player('O', 'dva', false);

    return {player1,  player2};
})();

function controlGameFlow() {
    function checkForTie() {
        if (gameBoard.turnCounter = 11) {
            console.log('TIE');
        };
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

const boardDisplay = (function () {
    const boardGridDisplay = document.querySelectorAll('.gameboard > div');
    let i;
    let j;
    let writeToGrid = function () {
            console.log(this);
            i = this.dataset.i;
            console.log(this.dataset.i);
            j = this.dataset.j;
            console.log(this.dataset.j);
            if(this.innerText === players.player1.playerMark) {
                gameBoard.boardGrid[i][j] = 0;
            } else if (this.innerText === players.player2.playerMark) {
                gameBoard.boardGrid[i][j] = 1;
            };
        }

    function writeMarkValues () {
        console.log(this);
        let bWriteToGrid = writeToGrid.bind(this); 
        if (gameBoard.turnCounter % 2 === 0) {
        //elements of an array  or  array-like structure are considered objects, so 'this' works
            this.innerText = players.player1.playerMark;
            bWriteToGrid();
            this.removeEventListener('click', writeMarkValues);
            console.log(gameBoard.boardGrid);
        } else {
            this.innerText = players.player2.playerMark;
            bWriteToGrid();
            this.removeEventListener('click', writeMarkValues);
            console.log(gameBoard.boardGrid);
        };
        return gameBoard.turnCounter++;
    }
    function handlePlayerInput() {
        boardGridDisplay.forEach(element => {
            element.addEventListener('click', writeMarkValues);
        });
        console.log(boardGridDisplay);
    }
    handlePlayerInput();
    
})();



const winCondition = controlGameFlow();
winCondition.checkWinConditions();
