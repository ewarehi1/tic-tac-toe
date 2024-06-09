// (function(){
    var Gameboard = {
        gameboard: {
        A1: '_',
        A2: '_',
        A3: '_',
        B1: '_',
        B2: '_',
        B3: '_',
        C1: '_',
        C2: '_',
        C3: '_',
        },
        winningConditions: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ],
        init: function() {
            console.log("Lets play tic-tac-toe!")
            this.render()
        },
        playTurn: function(pos, player) {
            this.gameboard[pos] = player
            this.render()
            this.resultValidation()
        },
        render: function() {
            var n = this.gameboard
            console.log(
                n.A1, n.A2, n.A3 +'\n'+
                n.B1, n.B2, n.B3 +'\n'+ 
                n.C1, n.C2, n.C3)
        },
        resultValidation: function() {
            let boardVals = Object.values(this.gameboard)
            for (win of this.winningConditions) {
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
        },
        
    }

    Gameboard.init()
// })()