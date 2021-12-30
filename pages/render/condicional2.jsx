import Se from "../../components/Se";

export default function condicional2(){
    return (
        <div>
            <Se teste={"Bruno" === 'bruno'}>
               Apareceu  
            </Se>
            <Se teste={1 == '1'}>
               Não Apareceu  
            </Se>
        </div>
    )
}