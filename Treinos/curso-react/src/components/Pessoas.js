function Pessoas({foto,nome,idade,profissao}){


return (


<div>

<img src={foto} alt={nome}/>
<h1>Olá Meu Caro: {nome}</h1>
<p>Idade: {idade}</p>
<p>Profissao: {profissao}</p>


</div>

)


}

export default Pessoas