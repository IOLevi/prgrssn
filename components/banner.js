import {Carousel} from "react-bootstrap";
import styles from "./banner.module.css";
import React from "react";

export default function Banner() {

    return (
        <Carousel>
            <Carousel.Item>
                <div className={styles.bannerContainer}>
                    <img className={styles.outNowBanner} src={'/intrastellarBanner.jpeg'} alt={"Intrastellar Out Now"}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.bannerContainer}>
                    <img className={styles.outNowBanner} src={'/morginmadison.jpg'} alt={"Intrastellar Out Now"}/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={styles.bannerContainer}>
                    <img className={styles.outNowBanner} src={'/swimmingbanner.jpg'} alt={"Intrastellar Out Now"}/>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}