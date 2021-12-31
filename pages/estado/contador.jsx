import { useState } from 'react'
import { Button } from 'reactstrap'
import ContadorDisplay from '../../components/ContadorDisplay'

export default function contador() {

    const [contador, setContador] = useState(0)

    function menos() {
        setContador(contador - 1)
    }

    function mais() {
        setContador(contador + 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <ContadorDisplay numero={contador} />
            <Button color="primary" onClick={mais}> + </Button>
            <Button color="danger" onClick={menos}> - </Button>
        </div>
    )
}