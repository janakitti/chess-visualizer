import React from "react"

function Square(props) {
    function generateShade(index) {
        const {wVal, bVal} = props.piece;
        const shadeFactor = 2;
        let squareColor = {r:50, g:50, b:50, a:1}
        if(wVal > 0 || bVal > 0) {
            squareColor = {r:wVal > 0 ? 200 : 50, g:50, b:bVal > 0 ? 200 : 50, a:(wVal + bVal) * shadeFactor/20};
        } else {
            squareColor = ((index % 2 === 0 && (Math.floor(index / 8) % 2) === 0) ||
                (index % 2 === 1 && ((Math.floor(index / 8) % 2) === 1))) ? {r:202, g:212, b:219, a:1} : {r:171, g:180, b:186, a:1}
        }
        return "rgba(" + squareColor.r + ", " + squareColor.g + ", " + squareColor.b + ", " + squareColor.a + ")"
    }

    function onDragStart(event, index) {
        console.log("S:" + index)
        event.dataTransfer.setData("id", index)
    }

    function onDragOver(event, index) {
        event.preventDefault();
    }

    function onDrop(event, dropLoc) {
        let srcIndex = event.dataTransfer.getData("id");
        props.movePieceHandler(parseInt(srcIndex), parseInt(props.index))
    }

    return (
        <div className="square" onDragOver={(e) => onDragOver(e, props.index)}
                onDrop={(e) => onDrop(e, "dest")}
            style={{backgroundColor: generateShade(props.index)}}>
            <div className="piece-container" onDragStart={(e) => onDragStart(e, props.index)} draggable>
                <img className="piece-img" hidden={props.piece.img === ""} src={props.piece.img}/>
                {/*{props.piece.type}, {props.piece.player}, {props.piece.wVal}, {props.piece.bVal}*/}
            </div>
        </div>
    )
}

export default Square
