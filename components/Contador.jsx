import { Component } from "react"
import { Button, Input } from "reactstrap"

export default class Contador extends Component {

    // Outra forma de declar o state
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: props.valorInicial ?? 0,
    //         passo: props.passo ?? 1
    //     }
    // }

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    // uma forma de transformar a função setState() em instancia
    // constructor(props){
    //     super(props)

    //     this.incremento = this.incremento.bind(this)
    // }

    incremento() {
        this.setState({
            numero: this.state.numero + (this.props.passo ?? 1)
        })
    }

    // outra forma de fazer função, nota que no onClick fica mais curto
    decremento = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    renderForm() {
        return (
            <>
                <Input type="number" min={1} max={1000} value={this.state.passo} onChange={event => this.setState({ passo: event.target.value })} />
                <Button color="primary" onClick={() => this.incremento()}>+</Button>
                <Button color="danger" onClick={this.decremento}>-</Button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador usando Classe</h1>
                <h2>{this.state.numero}</h2>
                {this.renderForm()}
            </div>
        )
    }

}