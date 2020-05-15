import styles from './topnav.module.css';

export default function Topnav() {

    return (
        <div className={styles.topnavContainer}>
            <div className={styles.topnav}>
                <span className={styles.prgrssnTag}>
                    prgrssnrecords
                </span>
            </div>
        </div>

    )
}