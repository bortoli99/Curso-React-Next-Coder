import { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'

export default function mega() {

    const [numeros, setNumeros] = useState([])
    const [quantidade, setQuantidade] = useState(0)

    function gerarNumeros() {
        let vetor = []

        for(let i = 0; i < quantidade; i++){
            let x = 1 + Math.random() * (60 - 1)

            if(vetor.find(valor => valor === Math.round(x))){
                console.log("Entrou")
                let y = 1 + Math.random() * (60 - 1)
                vetor.push(Math.round(y))
            }else{
                vetor.push(Math.round(x))
            }

        }
        
        setNumeros(vetor)
    }

    return (
        <>
            <div className="row">
                <div className="col-5">
                    Os Numeros da Mega Sena:
                </div>
                <div className="col-5">
                    {numeros.map((numero, key) => <span key={key}>| {numero} |</span>)}
                </div>
            </div>
            <div className="row">
                <Form>
                    <FormGroup row>
                        <Label for="numeros" sm={2}>
                            Escolha os numeros
                        </Label>
                        <Col sm={3}>
                            <Input type="number" id="numeros" value={quantidade} onChange={val => setQuantidade(val.target.value)} max={6} min={0} />
                        </Col>
                        <Col sm={2}>
                            <Button type="button" color="primary" onClick={gerarNumeros}>Gerar</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </>
    )
}