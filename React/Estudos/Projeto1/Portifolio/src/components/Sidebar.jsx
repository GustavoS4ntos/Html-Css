import Avatar from '../img/goku.png'
import "../styles/components/sidebar.sass";
import SocialNetworks from './SocialNetworks';
import Info from './Info';
const Sidebar = () => {
    return (
     

<aside id="sidebar">


<p><img src={Avatar} alt="Goku"/></p>
<p className="title">Desenvolvedor</p>
<SocialNetworks/>
<Info/>
<p>informações de contato</p>
<a href="" className="btn">
    Donwload currículo
</a>


</aside>


    );
  };
  
  export default Sidebar
  