export default function Form(){
    return (
        <div>
            <form action="/show" method="GET">
                <br/>
                <label for="nome">Seu nome: </label>
                <input type="text" id="nome" name="nome"/>
                <br/>
                <br/>
                <label for="sobrenome">Sobrenome: </label>
                <input type="text" id="sobrenome" name="sobrenome"/>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}