import React from "react"

function Square(props) {
    return (
        <button className={"square"}>
            {props.piece}
        </button>
    )
}

export default Square