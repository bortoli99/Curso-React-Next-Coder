export default function lista1(){
    return (
        <div>
            {lista(10)}
        </div>
    )
}


// Minha solução para o exercio proposto
function lista(valor){
    
    const span = []
    for (let index = 0; index < valor; index++) {
        span.push(<h1><span>{index}</span></h1>)         
    }
    return span;
}