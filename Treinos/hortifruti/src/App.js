import React,{useState} from 'react'
import Tomate from './imagens/tomate.png'
import Manga from './imagens/manga.png'
import Limao from './imagens/limao.png'
import Laranja from './imagens/laranja.png'
import Cereja from './imagens/cereja.png'
import Cenoura from './imagens/cenoura.png'
import Beterraba from './imagens/beterraba.png'
import Alface from './imagens/alface.png'
import styled from 'styled-components'


const Container = styled.div`
background-color:red;
`

function App() {
const [frutas , setFrutas] = useState ([
  {nome:'tomate',img:Tomate},{nome:'manga',img:Manga},{nome:'limao',img:Limao},{nome:'laranja',img:Laranja},
  {nome:'cereja',img:Cereja},{nome:'cenoura',img:Cenoura},{nome:'beterraba',img:Beterraba },{nome:'alface',img:Alface}
])

  return (
    <Container >
      <h1>Hortifruti vnw</h1>
    {frutas.map((itens)=>(
      <img src={itens.img} alt={itens.nome}/>
    ))}
    </Container>
  );
}

export default App;
