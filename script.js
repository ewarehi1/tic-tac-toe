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
        init: function() {
            console.log("Lets play tic-tac-toe!")
            this.render()
        },
        playTurn: function(pos, player) {
            this.gameboard[pos] = player
            this.render()
        },
        render: function() {
            let n = this.gameboard
            console.log(
                n.A1, n.A2, n.A3 +'\n'+
                n.B1, n.B2, n.B3 +'\n'+ 
                n.C1, n.C2, n.C3)
        }
    }

    Gameboard.init()
// })()