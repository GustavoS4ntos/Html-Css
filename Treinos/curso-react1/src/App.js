import logo from './logo.svg';
import './App.css';
import Condicional from './componets/evento/Condicional';
import Lista from './componets/evento/Lista';
import { useState } from 'react';
import SeuNome from './componets/evento/SeuNome';
import Saudacao from './componets/evento/Saudacao';

function App() {
const [nome, setNome] = useState()
const meusItens=['React','Vue','Angular']

  return (
    <div className="App">
      <h1>Curso React Parte 2</h1>
      <Lista itens={meusItens}/>
      <Lista itens={[]}/>
      <SeuNome setNome={setNome}/>
     <Saudacao nome={nome}/>
   
    </div>
  );
}

export default App;
