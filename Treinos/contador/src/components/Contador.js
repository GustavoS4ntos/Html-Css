import React,{useState} from'react';
import styled from 'styled-components';

const TimeStyled = styled.h1 `
font-size:150px;
text-align: center;
color:red;

`

const ButtonStyled = styled.button `
font-size:25px;
font-weight: bold;
width:50px;
height:50px
padding:0px;
margin:30px;
background-color:red;
border-radius: 50%;
border: 10px solid red;

`

const DivStyled = styled.div`
text-align: center;
`


function Contador(){


    const[Time, setTime] = useState(0)

    const MaisChad = ()=>{

        if (Time <= +9){setTime(Time + 1)}
    }

    const MenosChad = ()=>{

        if (Time >= +1 ){setTime(Time -1)}

    }

   

return(

<DivStyled>

<TimeStyled >{Time}</TimeStyled>



<ButtonStyled onClick={MaisChad}>+</ButtonStyled>
<ButtonStyled onClick={MenosChad}>-</ButtonStyled>

</DivStyled>



)


}
export default Contador