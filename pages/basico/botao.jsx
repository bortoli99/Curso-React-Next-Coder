export default function botao(){

    function acao2(){
        console.log("Oie")
    }

    function acao5(e){
        console.log(e)
    }

    function acao6(e){
        console.log(e)
    }
    
    return (
        <div>
            <input type="text" onChange={acao6} />
            <button onClick={acao1}>Click #01</button>
            <button onClick={acao2}>Click #02</button>
            <button onClick={function () {
                console.log("WEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!")
            }}>Click #03</button>
            <button onClick={() => {
                console.log("Desisto")
            }}>Click #04</button>
            <button onClick={acao5}>Click #05</button>
            <button onClick={e => acao5(e)}>Click #05 versão extendida</button>
        </div>
    )
}

function acao1(){
    console.log("oi")
}