import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <img src="src/assets/globe.png" alt="globe" className={styles.globe} />
            <h3>My Travel Journal</h3>
        </header>
    )
}
