import listaProduto from '../../data/listaProduto'

export default function repeticao2(){
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código </th>
                        <th>Nome </th>
                        <th>Preço </th>
                    </tr>
                </thead>
                <tbody>
                    {listaProduto.map((produto, key) => <tr key={key}><td>{produto.id}</td><td>{produto.nome}</td><td>{produto.preco}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}