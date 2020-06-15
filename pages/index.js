import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.less';
import React, {useEffect} from "react";
import axios from 'axios';

export default function Home({data}) {

    const populateContentCards = () => {
    //    create array of content cards
        console.log(data);
        return data.releases.map((release, index)=>{
            return (
                <div className={styles.flexItem} key={index}>
                    {release.artist}
                    {release.songTitle}
                </div>
            )
        });
    };

    let contentCards = populateContentCards();

    return (
        <>
            <Header/>
            <Topnav/>

            <div className={styles.wesMainContainer}>
                <img src={'/wesgarage.jpeg'} alt={"Le Youth"} className={styles.wesImage}/>
            </div>

            <div>
                <main className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        This is a test
                    </div>
                    {contentCards}
                </main>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:3000/api/releases');
    const data = res.data;

    return {props: {data,}}
}
