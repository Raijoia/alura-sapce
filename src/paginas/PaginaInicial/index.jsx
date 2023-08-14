import banner from './banner.png'
import styles from './PaginaInicial.module.scss'

import Menu from "componentes/Menu";
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";

export default function PaginaInicial() {
  return (
    // reactFragemnt
    <> 
    <Cabecalho />
    <main>
      <section className={styles.principal}>
        <Menu />
        <div className={styles.principal__imagem}>
          <h1>A galeira mais completa do espaço</h1>
          <img src={banner} alt="A imagem da terra vista do espaço" />
        </div>
      </section> 
      <div className={styles.galeria}>
        <Galeria />
        <Populares /> 
      </div>
    </main>
    <Rodape />
    </>
  )
}