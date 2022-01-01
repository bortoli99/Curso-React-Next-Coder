export default function NumeroDisplay(props){
    return (
        <div style={{
            height: "100px",
            width: "100px",
            borderRadius: "50px",
            backgroundColor: "#222",
            color: "#FFF",
            fontSize: "4rem",
            justifyContent:"center",
            alignItems: "center",
            display: "flex",
        }}>
            {props.numero}
        </div>
    )
}