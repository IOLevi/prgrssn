import Header from '../components/header';
import Topnav from "../components/topnav";
import styles from '../components/home.module.css';
import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';
import Banner from '../components/banner';
import Releases from '../components/releases';
import MailingList from "../components/mailinglist";
import {MongoClient} from "mongodb";
import {Modal} from "react-bootstrap";

export default function Home({data}) {

    const [showModal, setShowModal] = useState(false);
    const modalIntervalRef = useRef({});

    useEffect(() => {
        modalIntervalRef.current = setInterval(() => setShowModal(true), 3000);
    }, []);

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

            <Modal show={showModal} onShow={()=>{clearInterval(modalIntervalRef.current)}} onHide={()=>setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontWeight: 'bolder'}}>Livestream Saturday June 27</Modal.Title>
                </Modal.Header>
                <img src={'/livestream.jpg'} alt={"Livestream announcement"} className={styles.announcement}/>
            </Modal>
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
