import { Button } from 'reactstrap'

export default function Filho(props){
    
    console.log(props.funcao)
    
    return (
        <div>
            <h1>Filho</h1>  
            <Button color="danger" onClick={() => props.funcao("Passei no Mestrado, meta para o ano que chega")} >Teste</Button>     
        </div>
    )
}