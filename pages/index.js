import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.less';

export default function Home() {
    return (
        <div>
            <Header/>
            <Topnav/>

            <main className={styles.flexContainer}>
                <div className={styles.flexItem}>

                </div>
            </main>

        </div>
    )
}
