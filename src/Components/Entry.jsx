/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 *
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 *
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

import React from "react";
import styles from "./Entry.module.css";

export default function Entry(props) {
    console.log(props.img)
    return (
        <>
            <article className={styles.journalEntry}>
                <div className={styles.imageContainer}>
                    <img
                        src={props.img.src}
                        alt={props.img.alt}
                        className={styles.mainImage}
                    />
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.location}>
                        <img src="src/assets/marker.png" alt="" />
                        <h3>{props.country}</h3>
                        <a href={props.googleMapsLink}>View on Google Maps</a>
                    </div>

                    <div className={styles.description}>
                        <h2>{props.title}</h2>
                        <p className={styles.date}>{props.dates}</p>
                        <p>{props.text}</p>
                    </div>
                </div>
            </article>
            <hr style={{ margin: "0 30px" }} />
        </>
    );
}
