export default function Show(){
    let params = (new URL(document.location)).searchParams;
    return (
        <div>
            <p>Seu nome é: {params.get("nome")}</p>
            <p>Seu sobrenome é: {params.get("sobrenome")}</p>
        </div>
    );
}