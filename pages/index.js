import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.module.css';
import React, {useEffect} from "react";
import axios from 'axios';
import Banner from '../components/banner';
import Releases from '../components/releases';
import MailingList from "../components/mailinglist";

export default function Home({data}) {

    return (
        <>
            <Header/>
            <Topnav/>

            <div>
                <Banner/>

                <div className={styles.wesMainContainer}>
                    <img src={'/wesgarage.jpeg'} alt={"Le Youth"} className={styles.wesImage}/>
                </div>

                <Releases data={data}/>

                <MailingList/>

            </div>
        </>
    );
}
export async function getStaticProps() {
    const res = await axios.get('/api/releases');
    const data = res.data;

    return {props: {data,}}
}
