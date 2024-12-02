import About from "./About";
import Teck from "./Teck";
import Project from "./Project";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
    <About />
    <Teck/>
    <Project />
    </main>
  )
}


export default MainContent