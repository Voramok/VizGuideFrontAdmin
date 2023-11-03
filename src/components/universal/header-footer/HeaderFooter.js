import React from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from './HeaderFooter.module.css'

const HeaderFooter = (props) => {
    return (
        <div className={styles.mainbody}>
            <div className={styles.mainheader}>
                <Header />
            </div>
            <div className={styles.maincontent}>
                {props.content}
            </div>
            <div className={styles.mainfooter}>
                <Footer />
            </div>
        </div>
    )
}

export default HeaderFooter

