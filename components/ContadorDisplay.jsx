export default function ContadorDisplay(props){
    return (
        <div style={{
            height: "200px",
            width: "200px",
            borderRadius: "100px",
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