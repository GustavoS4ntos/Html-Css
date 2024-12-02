import s from'./footer.module.scss';
import logoFace from '../../assets/logoFace.png';
import logoTt from '../../assets/logoTt.png';
import logoInsta from '../../assets/logoInsta.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import logoYoutube from '../../assets/logoYoutube.png';

export default function Footer() {
    return (
      <footer className={s.footer}>
        <section className={s.cttFooter}>
          <p>4002-8922</p>

          <nav>

              <a href=''><img src={logoFace} alt=' logo facebook'/></a>
              <a href=''><img src={logoTt} alt=' logo twitter'/></a>
              <a href=''><img src={logoYoutube} alt='logo youtube '/></a>
              <a href=''><img src={logoLinkedin} alt='logo linkidin '/></a>
              <a href=''><img src={logoInsta} alt=' logo instagram'/></a>

          </nav>

        </section>

        <section className={s.copyright}>
        <p>
          Layout desenvolvido pela Vai Na Web para fins educativos - 2024  
          </p>
          </section>
      </footer>
    );
  }