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

            <div>
                {/* EVAN: INSTALL REACT BOOTSTRAP AND ADD AN IMAGE CAROUSEL TO HAVE MULTIPLE BANNERS
                https://medium.com/@onesinus231/build-simple-news-app-using-next-js-react-bootstrap-af10d76d3486
                https://react-bootstrap.github.io/components/carousel/
                */}
                <div className={styles.bannerContainer}>
                    <img className={styles.outNowBanner} src={'/intrastellarBanner.jpeg'} alt={"Intrastellar Out Now"}/>
                </div>

                <div className={styles.wesMainContainer}>
                    <img src={'/wesgarage.jpeg'} alt={"Le Youth"} className={styles.wesImage}/>
                </div>


                <div className={styles.releaseText}>
                    releases
                </div>

                <div>
                    <main className={styles.flexContainer}>
                        <div className={styles.flexItem}>
                            <div className={styles.releaseTag}>
                                This is a test - 1
                            </div>
                        </div>
                        <div className={styles.flexItem} style={{'background-image': 'url(/thomfjordEP.jpeg)'}}>
                            <div className={styles.releaseTag}>
                                This is a test - 2
                            </div>
                        </div>
                        {contentCards}
                    </main>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:3000/api/releases');
    const data = res.data;

    return {props: {data,}}
}
