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
background-color:#F66000;
color:white;

`

const Titulo = styled.h1 `
font-size:50px;
padding:5vw;
`

function App() {
const [frutas , setFrutas] = useState ([
  {nome:'tomate',img:Tomate},{nome:'manga',img:Manga},{nome:'limao',img:Limao},{nome:'laranja',img:Laranja},
  {nome:'cereja',img:Cereja},{nome:'cenoura',img:Cenoura},{nome:'beterraba',img:Beterraba },{nome:'alface',img:Alface}
])

  return (
    <Container >
      <Titulo>Hortifruti vnw</Titulo>
    {frutas.map((itens)=>(
      <img src={itens.img} alt={itens.nome}/>
    ))}
    </Container>
  );
}

export default App;
