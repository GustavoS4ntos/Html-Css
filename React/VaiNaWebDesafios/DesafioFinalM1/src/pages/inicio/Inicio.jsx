import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import s  from './inicio.module.scss'

export default function Inicio() {
    return (
      <main >
      <section className= {s.priInicio} >
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className= {s.segInicio} >
        <h2>Por que devo doar?</h2>
        
        <section className={s.iconMain}>
          <section>
          <img src={icon1}alt=''/>
          <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </section>
          <section>
          <img src={icon2}alt=''/>
          <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </section>
          <section>
          <img src={icon3}alt=''/>
          <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </section>
          <section>
          <img src={icon4}alt=''/>
          <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </section>

        </section>
      </section>
    
      </main>
    );
  }
  