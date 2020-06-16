import styles from './topnav.less';

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