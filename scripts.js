const gameBoard = (function() {
    const boardGrid = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];
    let turnCounter = 2;

    function resetboardGrid () {
        for (let i = 0; i < boardGrid.length; i++) {
            for (let j = 0; j < boardGrid[i].length; j++) {
                boardGrid[i][j] = '';
                console.log(boardGrid);
            }
        }
        boardDisplay.handlePlayerInput();
        }
    return {boardGrid, turnCounter, resetboardGrid};
})();

const players =  (function () {
    const inputedP1Name = document.querySelector('')
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

const gameFlow = (function () {
    function checkWinConditions() {
        const r1 = gameBoard.boardGrid[0][0] + gameBoard.boardGrid[0][1] + gameBoard.boardGrid[0][2];
        const r2 = gameBoard.boardGrid[1][0] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[1][2];
        const r3 = gameBoard.boardGrid[2][0] + gameBoard.boardGrid[2][1] + gameBoard.boardGrid[2][2];
        const c1 = gameBoard.boardGrid[0][0] + gameBoard.boardGrid[1][0] + gameBoard.boardGrid[2][0];
        const c2 = gameBoard.boardGrid[0][1] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[2][1];
        const c3 = gameBoard.boardGrid[0][2] + gameBoard.boardGrid[1][2] + gameBoard.boardGrid[2][2];
        const d1 = gameBoard.boardGrid[0][0] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[2][2];
        const d2 = gameBoard.boardGrid[2][0] + gameBoard.boardGrid[1][1] + gameBoard.boardGrid[0][2];
        const gameResult = displayFlow.showEndGameScreen;
        if ((r1 === 0) || (r1 === 3)) {
            if(r1 === 0) {
                 console.log('player1 wins');
            } else if (r1 === 3) {
                console.log('player2 wins')
            };
        } else if ((r2 === 0) || (r2 === 3)) {
                if(r2 === 0) {
                     console.log('player1 wins');
                } else if (r2 === 3) {
                     console.log('player2 wins')
                };
        } else if ((r3 === 0) || (r3 === 3)) {
                if(r3 === 0) {
                     console.log('player1 wins');
                } else if (r3 === 3) {
                     console.log('player2 wins')
                };
        } else if ((c1 === 0) || (c1 === 3)) {
            if(c1 === 0) {
                 console.log('player1 wins');
            } else if (c1 === 3) {
                 console.log('player2 wins')
            };
        } else if ((c2 === 0) || (c2 === 3)) {
            if(c2 === 0) {
                 console.log('player1 wins');
            } else if (c2 === 3) {
                 console.log('player2 wins')
            };
        } else if ((c3 === 0) || (c3 === 3)) {
            if(c3 === 0) {
                console.log('player1 wins');
            } else if (c3 === 3) {
                console.log('player2 wins')
            };
        } else if ((d1 === 0) || (d1 === 3)) {
            if(d1 === 0) {
                console.log('player1 wins');
            } else if (d1 === 3) {
                console.log('player2 wins')
            };
        } else if ((d2 === 0) || (d2 === 3)) {
            if(d2 === 0) {
                 console.log('player1 wins');
            } else if (d2 === 3) {
                console.log('player2 wins')
            };
        } else if (gameBoard.turnCounter === 10) {
            console.log('tie');
            gameResult();0
0        } else {return};
        } 
    return{checkWinConditions};
})();

const boardDisplay = (function () {
    const boardGridDisplay = document.querySelectorAll('.gameboard > div');
    let i;
    let j;
    let writeToGrid = function () {
            i = this.dataset.i;
            j = this.dataset.j;
            if(this.innerText === players.player1.playerMark) {
                gameBoard.boardGrid[i][j] = 0;
            } else if (this.innerText === players.player2.playerMark) {
                gameBoard.boardGrid[i][j] = 1;
            };
        }

    function writeMarkValues () {
        //binds context of function to individual boardGridDisplay elements
        let bWriteToGrid = writeToGrid.bind(this); 
        if (gameBoard.turnCounter % 2 === 0) {
        //elements of an array  or  array-like structure are considered objects, so 'this' works
            this.innerText = players.player1.playerMark;
            bWriteToGrid();
            gameFlow.checkWinConditions();
            this.removeEventListener('click', writeMarkValues);
            console.log(gameBoard.boardGrid);
        } else {
            this.innerText = players.player2.playerMark;
            bWriteToGrid();
            gameFlow.checkWinConditions();
            this.removeEventListener('click', writeMarkValues);
            console.log(gameBoard.boardGrid);
        };
        console.log(gameBoard.turnCounter);
        return gameBoard.turnCounter++;
    }
    function handlePlayerInput() {
        boardGridDisplay.forEach(element => {
            element.addEventListener('click', writeMarkValues);
        });
    }
    handlePlayerInput();
    return{boardGridDisplay, handlePlayerInput};
})();

const displayFlow = (function () {

    const menuContainer = document.querySelector('.container_menu');
    const gameScreenContainer = document.querySelector('.container_game_screen')
    const endGameScreenContainer = document.querySelector('.container_end_game_screen');
    const startBtn = document.querySelector('.menu > p:nth-of-type(2)');
    const restartButton = document.querySelector('.end_game_screen > p:nth-of-type(2)')

    function generateInitialUI () {
        gameScreenContainer.classList.toggle('hideClass');
        endGameScreenContainer.classList.toggle('hideClass');
    }

    function resetBoardDisplay () {
        boardDisplay.boardGridDisplay.forEach(element => {
            element.innerText = '';
        })
    }
    
    function hideMenu () {
        menuContainer.classList.toggle('hideClass');
        gameScreenContainer.classList.toggle('hideClass');
    }
    function hideEndGameScreen () {
        endGameScreenContainer.classList.toggle('hideClass');
        menuContainer.classList.toggle('hideClass');
        resetBoardDisplay();
        gameBoard.resetboardGrid();
        gameBoard.turnCounter = 2;
    }
    function startGame () {
        startBtn.addEventListener('click', hideMenu);
        }
    function showEndGameScreen () {
        gameScreenContainer.classList.toggle('hideClass');
        endGameScreenContainer.classList.toggle('hideClass');
    }
    function restartGame () {
        restartButton.addEventListener('click', hideEndGameScreen);
    }
    generateInitialUI();    
    startGame();
    restartGame();
    return {showEndGameScreen};
})();