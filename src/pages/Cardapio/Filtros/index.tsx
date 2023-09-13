import styles from './Filtros.module.scss';
import filtros from './filtros.json'

type Iopcao = typeof filtros[0];

/*
interface Iopcao{
    id: number;
    label: string;
}*/

export default function Filtros(){
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={styles.filtro__filtro} key={opcao.id}>
                    {opcao.label}
                </button>
            )

            )}
        </div>
    );
}