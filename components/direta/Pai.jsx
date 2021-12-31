import Filho from "./Filho";

export default function Pai(props){
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Bruno" familia={props.familia} />
            <Filho nome="Isa" familia={props.familia} />
            <Filho {...props} nome="Claudio"  />
        </div>
    )
}