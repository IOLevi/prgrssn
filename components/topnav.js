import styles from './topnav.module.css';

export default function Topnav() {

    return (
        <div className={styles.topnav}>
            <div className={styles.prgrssnTag}>
                prgrssnrecords
            </div>
            <div className={styles.icons}>
                <a href={'https://twitter.com/prgrssnrecords'}><img src={'/twitter.svg'}/></a>
                <a href={'https://www.facebook.com/prgrssnrecords/'}><img src={'/facebook.svg'}/></a>
            </div>
        </div>
    )
}