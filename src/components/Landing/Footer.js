import React from 'react';
import styles from "../Landing/Footer.module.css"
import logo from "../../assest/logo.png"
import insta from "../../assest/insta.png"
import facebook from "../../assest/facebook.png"
import twitter from "../../assest/twitter.png"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <div className={styles.teamox}>
                    <div className={styles.teamoxLogo}>
                    <h3> <img src={logo}/> خلاقیت,نوآوری,رشد</h3>
                    </div>
                    <div className={styles.copyRight}>
                    <p>ALL RIGHT RESEARVED 2023&copy;</p>
                    </div>
                    <div className={styles.socialMedia}>
                    <div className={styles.socialIcon}>
                    <img src={insta}/>
                    </div>
                    <div className={styles.socialIcon}>
                    <img src={facebook}/>
                    </div>
                    <div className={styles.socialIcon}>
                    <img src={twitter}/>
                    </div>
                    </div>
                </div>

                <div className={styles.info}>

                    <div className={styles.infoh}>

                        <h3>اطلاعات ما</h3>
                    </div>

                    <ul className={styles.list1}>
                        <li><Link to="/home">درباره ما</Link> </li>
                        <li><Link to="/product">بلاگ</Link></li>
                    </ul>
                    <ul className={styles.list2}>
                        <li><Link to="/home">تماس با ما</Link> </li>
                        <li><Link to="/product">حریم شخصی</Link></li>
                    </ul>
                    <ul className={styles.list}>
                        <li><Link to="/home">پشتیبانی</Link> </li>
                        <li><Link to="/product">شرایط و قوانین</Link></li>
                    </ul>
                    
                </div>

                <div className={styles.info}>

                    <div className={styles.infoh}>

                        <h3>سرویس های ما</h3>
                    </div>

                    <ul className={styles.list}>
                        <li><Link to="/home">طراحی محصول</Link> </li>
                        <li><Link to="/product">باز طراحی وبسایت</Link></li>
                    </ul>
                    <ul className={styles.list}>
                        <li><Link to="/home">توسعه وبسایت</Link> </li>
                        <li><Link to="/product">باز طراحی اپلیکیشن</Link></li>
                    </ul>
                    <ul className={styles.list3}>
                        <li><Link to="/home">توسعه اپلیکیشن</Link> </li>
                        <li><Link to="/product">سِو و بهینه سازی</Link></li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Footer;