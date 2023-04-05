import { useState } from "react"

function Condicional (){

    const [email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarCadrasto(e){
e.preventDefault()
setUserEmail(email)
console.log(userEmail)

    }

    function limparEmail(e){
 setUserEmail('')

    }

return (

<div>

    <h2>Cadraste Seu Email:</h2>
    <form>

<div>

<input type="email" id="email" name="Email:" placeholder="Digite Seu Melhor Email" onChange={(e)=> setEmail(e.target.value) }/>

</div>

<button type="submit" onClick={enviarCadrasto}>Enviar Email Cadrastado</button>

{ userEmail && (

<div>
<p> O-email do usuario é :{userEmail}</p>
<button onClick={limparEmail}>LimparEmail</button>
</div>

)}

    </form>


</div>


)

}

export default Condicional