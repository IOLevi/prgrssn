import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.less';
import React, {useEffect} from "react";
import axios from 'axios';

export default function Home({data}) {

    useEffect(() => {
    //    get content cards from backend
    });

    const populateContentCards = () => {
    //    create array of content cards
        data.releases.map((release)=>{
            return (
                <div className={styles.flexItem}>
                    {release.artist}
                    {release.songTitle}
                </div>
            )
        })
    };

    // let contentCards = populateContentCards();

    return (
        <>
        <Header/>
        <Topnav/>

        <div>
            <main className={styles.flexContainer}>
                <div className={styles.flexItem}>
                    This is a test
                </div>
                {/*{contentCards}*/}

            </main>
        </div>
        </>
    )
}

// export async function getStaticProps() {
//     const res = await axios.get('https://localhost:3000/api/releases');
//     const data = await res.json();
//
//     return {props: {data,}}
// }
