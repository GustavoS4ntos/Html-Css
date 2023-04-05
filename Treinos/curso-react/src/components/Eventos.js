import Button from "./evento/Button"
function Eventos ({numero}){

    function meEnvie(){


console.log(`Bom Dia Gustavo ${numero}`)



    }

    function segundoEvento(){

console.log('Ativando Segundo Evento')

    }


    return(

        <div>
            <h1>Me Envie Um Bom Dia</h1>
            <Button event={meEnvie}text="Primeiro Evento"/>
            <Button event = {segundoEvento} text="Segundo Evento"/>
            <button onClick={meEnvie}>Enviar</button>
        </div>



    )
}

export default Eventos