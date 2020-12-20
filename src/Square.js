import React from "react"

function Square(props) {
    function generateShade(index) {
        const val = props.piece.val;
        console.log(val)
        const shadeFactor = 16;
        let squareColor = ((index % 2 === 0 && (Math.floor(index / 8) % 2) === 0) ||
            (index % 2 === 1 && ((Math.floor(index / 8) % 2) === 1))) ? 4671303 : 2367777
        if(val < 0) {
            console.log("hello")
            squareColor += val * shadeFactor * -65536
        } else if(val > 0) {
            squareColor += val * shadeFactor * 256
        }
        return "#" + squareColor.toString(16)
    }
    return (
        <button className="square"
            style={{backgroundColor: generateShade(props.index)}}
        >
            {props.piece.type}
        </button>
    )
}

export default Square
