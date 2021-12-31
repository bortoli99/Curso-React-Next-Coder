import { useState } from "react"

export default function formulario(){
    const [ val , setval ] = useState("Incial")
    
    return (
        <div>
            <input type="text" value={val} onChange={x => setval(x.target.value)} />
        </div>
    )
}