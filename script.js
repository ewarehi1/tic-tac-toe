(function(){
    const Game = (() => {
        const gameboard = {
        A1: '',
        A2: '',
        A3: '',
        B1: '',
        B2: '',
        B3: '',
        C1: '',
        C2: '',
        C3: '',
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
        const msg = document.querySelector('#msg')
        let turnCounter = 0
        const _init = function() {
            console.log("Lets play tic-tac-toe!")
            msg.innerText = "Lets play tic-tac-toe!"
            _render()
        }
        const playTurn = function(pos) {
            let player
            if (turnCounter % 2 == 0) {
                player = 'X'
            } else {
                player = 'O'
            }
            if (gameboard[pos] == '') {
                gameboard[pos] = player
                msg.innerText = ""
                turnCounter++
            } else {
                console.log("You can't put that there!")
                msg.innerText = "You can't put that there!"
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
                    msg.innerText = `${boardVals[a]} is the winner!`
                    break
                }
            }
        }
        const reset = function() {
            for (let key in gameboard) {
                gameboard[key] = ''
            }
            turnCounter = 0
            _init()
        }

        _init()

        return {playTurn, resultValidation, gameboard, reset}
    })()

    const Display = (() => {
        const board = document.querySelector('#board')
        const body = document.querySelector('body')
        const _init = function() {
            render()
            createResetBtn()
        }
        const render = function() {
            for (let i = 0; i < 9; i++) {
                const position = Object.keys(Game.gameboard)[i]

                const btn = document.createElement('button')
                btn.setAttribute('id', `${position}`)
                btn.setAttribute('class', 'squares')
                btn.innerText = `${Game.gameboard[`${position}`]}`
                
                btn.addEventListener('click', () => {
                    Game.playTurn(position)
                    document.querySelector(`#${position}`).innerText = `${Game.gameboard[`${position}`]}`
                })

                board.appendChild(btn)
            }  
        }
        const rerender = function() {
            Game.reset()
            while (board.firstChild) {
                board.removeChild(board.firstChild);
            }
            render()
        }
        const createResetBtn = function() {
            const resetBtn = document.createElement('a')
            resetBtn.innerText = "reset"
            resetBtn.setAttribute('id', 'resetBtn')
            resetBtn.addEventListener('click', rerender)
            body.appendChild(resetBtn)
        }

        _init()

        return {rerender}
    })()
})()