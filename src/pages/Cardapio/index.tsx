import styles from './Cardapio.module.scss';
import Logo from 'assets/logo.png';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export function Cardapio(){
    const [busca,  setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <img src={Logo} alt="Logo" />
                <Buscador busca={busca} setBusca={setBusca} />
            </nav>
                
            <div className={styles.text1}>
                    Best food in the town
                </div>
                <div className={styles.text}>
                    "The house of code and dough"
                </div>
          
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo} >Cardapio</h3>
                <div className={styles.cardapio__filtros}>
                    <Filtros/>
                </div>
            </section>

        </main>
    );
}