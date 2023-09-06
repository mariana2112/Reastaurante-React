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
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    "A casa do codigo e da massa"
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo} >Cardapio</h3>
                <div className={styles.cardapio__filtros}>
                    <Filtros/>
                </div>
                <Buscador busca={busca} setBusca={setBusca} />
            </section>

        </main>
    );
}