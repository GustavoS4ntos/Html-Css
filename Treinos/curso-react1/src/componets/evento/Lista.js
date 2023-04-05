function Lista({itens}){

return(
<>

<h3>Lista De Coisas Boas</h3>

{
itens.length > 0 ? (
itens.map((item,index) =>(<p key={index}>{item}</p>))) :(<p>Sem Itens No Momento</p>)}

</>

)

}

export default Lista