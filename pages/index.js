import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.less';
import React, {useEffect} from "react";

export default function Home() {

    useEffect(() => {
    //    get content cards from backend
    });

    const populateContentCards = () => {
    //    create array of content cards
    };

    return (
        <>
        <Header/>
        <Topnav/>

        <div>
            <main className={styles.flexContainer}>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                <div className={styles.flexItem}>
                    This is a test
                </div>
            </main>
        </div>
        </>
    )
}
