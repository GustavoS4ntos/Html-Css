import iconLivro from '../../assets/iconLivro.png'
import s from './queroDoar.module.scss'

export default function QueroDoar() {
    return (
      <section className={s.queroDoarSection}>
       <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

       <form action=''>
        <div>

        <img src={iconLivro} alt='icone de um livro com borda azul'></img>
        <h2>Informções do Livro</h2>
        </div>
        <input type='text'name='' id='' placeholder='Titulo'/>
        <input type='text'name='' id='' placeholder='Categoria'/>
        <input type='text'name='' id='' placeholder='Autor'/>
        <input type='text'name='' id='' placeholder='Link da Imagem'/>
        <input type='submit'value='Doar' className={s.buttonDoar}/>




       </form>

      </section>
    );
  }
  