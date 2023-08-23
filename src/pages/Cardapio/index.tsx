import styles from './Cardapio.module.scss';
import Logo from 'assets/logo.png';

export function Cardapio(){
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
            <section>
                <h3>Cardapio</h3>
            </section>
        </main>
    );
}