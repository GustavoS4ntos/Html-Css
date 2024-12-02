import s from './livrosDoados.module.scss'
import livroVermelho from '../../assets/livroVermelho.png'
export default function LivrosDoados() {
    return (
      <section className={s.livrosDoadosSection}>
        <h2>Livros Doados</h2>
        <section className={s.containerCards}>


          <section>
        <img src={livroVermelho} alt='Um Livro Vermelho '/>
        <div>
        <h3>O Protagonista</h3>
        <p>Susanne Andrade</p>
        <p>Ficção</p>
        </div>

          </section>
        </section>
      </section>
    );
  }
  