import styles from "./releases.module.css";
import React from "react";

export default function Releases({data}) {

    const populateContentCards = () => {
        return data.releases.map((release, index) => {
            return (
                <div className={styles.flexItem} key={index}>
                    <img src={release.imageUrl || '/prgrssn-logo400x400.jpg'} alt={release.songTitle}/>
                    {/*<span className={styles.releaseTag}>{release.artist} - {release.songTitle}</span>*/}
                </div>
            )
        });
    };

    let contentCards = populateContentCards();
    return (
        <>
            <div className={styles.releaseText}>
                releases
            </div>

            <div>
                <main className={styles.flexContainer}>
                    {contentCards}
                </main>
            </div>
        </>
    )
}