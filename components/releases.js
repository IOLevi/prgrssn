import styles from "./releases.module.css";
import React from "react";

export default function Releases({data}) {

    const populateContentCards = () => {
        return data.releases.map((release, index) => {
            // rewrite the conditional URL as a prop li ke if (release.releaseUrl) -> inputProp = {style: {background-image:. ... }
            return (
                <div className={styles.flexItem}
                     key={index} {...(release.imageUrl && {style: {'backgroundImage': `url(${release.imageUrl})`}})} >
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