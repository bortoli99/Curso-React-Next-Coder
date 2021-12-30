export default function TabuleiroDeXadrez() {
    return (
        <>
            <div className="row d-flex justify-content-center" style={{
                background: "gray"
            }}>
                <div className="col-8">
                    <div className="row" style={{
                        height: 100
                    }}></div>
                    <div className="row">
                        {gerarCasas(true)}
                    </div>
                    <div className="row">
                        {gerarCasas(false)}
                    </div>
                    <div className="row">
                        {gerarCasas(true)}
                    </div>
                    <div className="row">
                        {gerarCasas(false)}
                    </div>
                    <div className="row">
                        {gerarCasas(true)}
                    </div>
                    <div className="row">
                        {gerarCasas(false)}
                    </div>
                    <div className="row">
                        {gerarCasas(true)}
                    </div>
                    <div className="row">
                        {gerarCasas(false)}
                    </div>
                    <div className="row" style={{
                        height: 100
                    }}></div>
                </div>
            </div>
        </>
    )
}

function gerarCasas(flag) {
    const casas = []
    const primeiro = flag ? "white" : "black"
    const segundo = flag ? "black" : "white"


    for (let casa = 1; casa <= 8; casa++) {

        const cor = casa % 2 == 0 ? segundo : primeiro


        const teste = (
            <div className="col-1" style={{
                background: cor,
                height: 73.38
            }}>
            </div>
        )

        casas.push(teste)
    }
    return casas;
}