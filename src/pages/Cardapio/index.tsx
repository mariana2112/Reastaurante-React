import styles from './Cardapio.module.scss';
import Logo from 'assets/logo.png';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Mario from 'assets/mario.png';

export function Cardapio(){
    const [busca,  setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <img src={Logo} alt="Logo" />
                <Buscador busca={busca} setBusca={setBusca} />
            </nav>
                
                <div className={styles.textos}>
            <div className={styles.text1}>
                    Best food in the town
                </div>
                <img src={Mario} alt="Mario" className={styles.img} />
                <div className={styles.text}>
                    "The house of code and dough"
                </div>

                </div>

          
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo} >Menu</h3>
                <div className={styles.cardapio__filtros}>
                    <Filtros/>
                </div>
            </section>
  

        </main>
    );
}