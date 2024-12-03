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

import React from 'react'
import styles from "./Entry.module.css"

export default function Entry() {
    return (
        <>
            <article className={styles.journalEntry}>
                <div className={styles.imageContainer}>
                    <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080" alt="Mount Fuji" className={styles.mainImage} />
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.location}>
                        <img src="src/assets/marker.png" alt="" />
                        <h3>JAPAN</h3>
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    </div>

                    <div className={styles.description}>
                        <h2>Mount Fuji</h2>
                        <p className={styles.date}>12 Jan, 2024 - 24 Jan, 2024</p>
                        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </div>

            </article>
            <hr style={{ margin: "0 30px" }} />
        </>
    )
}
