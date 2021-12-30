export default function repeticao1() {
    const listaAprovados = [
        'Jão',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    function renderizarLista(){
        return listaAprovados.map((nome, key) => <li key={key}>{nome}</li>)
    }

    function renderizarListaComForEach() {
        const jsx = []

        listaAprovados.forEach(x => {
            jsx.push(<li key={x}>{x}</li>)
        })
        
        return jsx 
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}