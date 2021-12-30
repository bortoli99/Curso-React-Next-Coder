export default function Se(props){
    if(props.teste){
        return props.children
    } else {
        return null
    }
}