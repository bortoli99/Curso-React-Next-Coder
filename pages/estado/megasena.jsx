import { useEffect, useState } from "react"
import { Button, Input } from "reactstrap"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {
    const [numeros, setNumeros] = useState([])
    const [quantidade, setQuantidade] = useState(6)

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderNumeros() {
        return numeros.map((numero, key) => <NumeroDisplay key={key} numero={numero} />)
    }

    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1>Mega Sena</h1>
                <div style={{
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }} >
                    {renderNumeros()}
                </div>
                <br />
                <div>
                    <Input type="number" min={6} max={20} value={quantidade} onChange={event => setQuantidade(event.target.value)} />
                    <Button color="primary" onClick={() => setNumeros(mega(parseInt(quantidade)))} >Gerar Aposta</Button>
                </div>
            </div>
        </>
    )
}