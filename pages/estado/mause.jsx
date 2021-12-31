import { useState } from "react"

export default function mouse() {
    
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)
    
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#FFF",
        height: "100vh",
        flexDirection: "column",
    }

    function quandoMover(ev){
        setX(ev.clientX) 
        setY(ev.clientY)
    }

    return (
        <div style={style} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}