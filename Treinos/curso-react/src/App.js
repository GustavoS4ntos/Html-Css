import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import PropsTest from './components/PropsTest';

function App() {

const name="Gustavo"


  return (
    <div className="App">
    <h1>Olá Mundo</h1>
    <p>Bem Vindo {name}</p>
     <SayMyName nome = "Gustavinho"/>
     <SayMyName nome = {name}/>
     <Pessoas 
  
      nome = "Senhor"
     idade = "50"
     profissao = "Pintor"
     foto = "https://i.pinimg.com/550x/97/7e/4d/977e4daa3554253a5270cdc6be56dc5b.jpg"/>

     <PropsTest 
     nome= "Gol Trend"
     ano = "1999"
     marca= "Gol"

     foto="https://1.bp.blogspot.com/-puAgvTPdhJY/W1kruXnZt_I/AAAAAAACs28/tzH3L_J-WykT4MmPBwZqZsDrA28VFLZDQCLcBGAs/s1600/VW-Gol-2019-automatico%2B%252814%2529.jpg"
     
     
     />


    </div>




  );
}

export default App;
