import React from 'react'
import Styles from "./footer.module.css"
import Contact from '../Contact/contact'

function Footer() {
    return (
        <footer className={Styles.footer}>
            <Contact />
            <p className={Styles.copyright}>©2025renren</p>
        </footer>
    )
}

export default Footer