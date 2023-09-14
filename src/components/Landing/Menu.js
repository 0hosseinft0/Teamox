import React from 'react';
import styles from "../Landing/Menuhamburger.module.css";
import logo from "../../assest/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menuOpen} >
            <div className={styles.listContainer}>
                
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt='Logo'/>
            </div>

                <ul className={styles.list}>
                    <li><Link to="/home">صفحه اصلی </Link> </li>
                    <li><Link to="/service">سرویس ها </Link></li>
                    <li><Link to="/nemone">نمونه کار ها</Link></li>
                    <li><Link to="/aboutus">درباره ما</Link></li>
                </ul>
            
            </div>
    </div>
  )
}

export default Menu;