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
            // rewrite the conditional URL as a prop like if (release.releaseUrl) -> inputProp = {style: {background-image:. ... }
            return (
                <div className={styles.flexItem} key={index} {...(release.imageUrl && {style: {'background-image': `url(${release.imageUrl})`}})} >
                    <div className={styles.releaseTag}>
                        {release.artist} - {release.songTitle}
                    </div>
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

            <div className={styles.releaseText}>
                Releases
            </div>

            <div>
                <main className={styles.flexContainer}>
                    <div className={styles.flexItem}>
                        <div className={styles.releaseTag}>
                            This is a test
                        </div>
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
