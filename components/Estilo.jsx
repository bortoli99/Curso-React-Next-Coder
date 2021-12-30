import React from 'react';
import { Button } from 'reactstrap'

export default function Estilo(props) {
    return (
        <div className="row">
            <div className="col-1" style={{
                background: "black"
            }}>
                <Button color="warning">Danger!</Button>
            </div>
            <div className="col-2">
                <h1 style={{ color: props.salario >= 0 ? "green" : "red" }} >Sem Condições kkk</h1>
                <h1>Com Condições</h1>
            </div>
        </div>
    )
}