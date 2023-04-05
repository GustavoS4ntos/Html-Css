import {useState} from 'react'
function Form(){

    function cadrastarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} foi Cadrastado com a senha: ${password}`)

console.log('Usuario Cadrastado')

    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return (

        <div>

        <h1> Meu Cadrasto</h1>


        <form onSubmit={cadrastarUsuario}>
<div>
<label htmlFor="name">Nome:</label>
<input type="text" id="name" name="name" placeholder="Digite Seu Nome"
onChange={(e) => setName(e.target.value)}
/>

</div>



<div>
<label htmlFor="password">Senha:</label>
<input type="password" id="password" name="password" placeholder="Digite Uma Senha"
onChange={(e) => setPassword(e.target.value)}
/>

</div>

<div>
<input type= "submit" value="Cadrastar"/>

</div>
        </form>
        </div>


    )
}

export default Form