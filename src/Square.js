import React from "react"

function Square(props) {
    function generateShade(index) {
        const val = props.piece.val;
        const shadeFactor = 2;
        let squareColor = {r:50, g:50, b:50, a:1}
        if(val < 0) {
            squareColor = {r:200, g:50, b:50, a:(val * -shadeFactor)/10};
        } else if(val > 0) {
            squareColor = {r:50, g:200, b:50, a:(val * shadeFactor)/10};
        } else {
            squareColor = ((index % 2 === 0 && (Math.floor(index / 8) % 2) === 0) ||
                (index % 2 === 1 && ((Math.floor(index / 8) % 2) === 1))) ? {r:202, g:212, b:219, a:1} : {r:171, g:180, b:186, a:1}
        }
        console.log(squareColor.a)
        return "rgba(" + squareColor.r + ", " + squareColor.g + ", " + squareColor.b + ", " + squareColor.a + ")"
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
