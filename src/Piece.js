class Piece {
    constructor(type, player, val=0) {
        this.type = type
        this.player = player
        this.val = val
    }

    setVal(v) {
        this.val = this.val + v
    }

}

export default Piece