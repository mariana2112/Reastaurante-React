import styles from './Cardapio.module.scss';
import Logo from '../../assets/logo.png';

export function Cardapio(){
    return(
        <main>
            <nav className={styles.menu}>
                <img src={Logo} alt="Logo" />
            </nav>
        </main>
    );
}