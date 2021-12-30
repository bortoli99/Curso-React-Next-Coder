import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item>
                    Item #01
                </Item>
                <Item>
                    Item #02
                </Item>
                <Item>
                    Item #03
                </Item>
            </Lista>
        </div>
    )
}