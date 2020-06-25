import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.module.css';
import React, {useEffect} from "react";
import axios from 'axios';
import Banner from '../components/banner';
import Releases from '../components/releases';
import MailingList from "../components/mailinglist";
import {MongoClient} from "mongodb";

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
    const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRESS}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    if (!client.isConnected()) await client.connect();
    const releases = await client.db(process.env.DB_NAME).collection('releases').findOne();
    const test = JSON.stringify(releases);
    const data = JSON.parse(test);

    return {props: {data:data,}}
}
