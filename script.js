// (function(){
    const Game = (() => {
        const gameboard = {
        A1: '_',
        A2: '_',
        A3: '_',
        B1: '_',
        B2: '_',
        B3: '_',
        C1: '_',
        C2: '_',
        C3: '_',
        }
        const _winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        let turnCounter = 0
        const _init = function() {
            console.log("Lets play tic-tac-toe!")
            _render()
        }
        const playTurn = function(pos) {
            let player
            if (turnCounter % 2 == 0) {
                player = 'X'
                turnCounter++
            } else {
                player = 'O'
                turnCounter++
            }
            if (gameboard[pos] == '_') {
                gameboard[pos] = player
            } else {
                console.log("You can't put that there!")
                return
            }
            _render()
            resultValidation()
        }
        const _render = function() {
            var n = gameboard
            console.log(
                n.A1, n.A2, n.A3 +'\n'+
                n.B1, n.B2, n.B3 +'\n'+ 
                n.C1, n.C2, n.C3)
        }
        const resultValidation = function() {
            let boardVals = Object.values(gameboard)
            for (const win of _winningConditions) {
                let a = win[0]
                let b = win[1]
                let c = win[2]

                let condition1 = boardVals[a] == 'X' || boardVals[a] == 'O'
                let condition2 = boardVals[a] == boardVals[b] && boardVals[b] == boardVals[c]

                if (condition1 && condition2) {
                    console.log(`${boardVals[a]} is the winner`)
                    break
                }
            }
        }
        const reset = function() {
            for (let key in gameboard) {
                gameboard[key] = '_'
            }
            _init()
        }

        _init()

        return {playTurn, resultValidation, gameboard, reset}
    })()

    const Display = (() => {
        const _init = function() {
            render()
        }
        const render = function () {
            const board = document.querySelector('#board')
            for (let i = 0; i < 9; i++) {
                position = Object.keys(Game.gameboard)[i]

                btn = document.createElement('button')
                btn.setAttribute('id', `${position}`)
                btn.setAttribute('class', 'squares')
                btn.innerText = `${Game.gameboard[`${position}`]}`
                board.appendChild(btn)
            }
        }

        _init()
    })()
// })()