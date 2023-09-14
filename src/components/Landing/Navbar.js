import React , {useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import styles from "../Landing/Navbar.module.css";
import logo from "../../assest/logo.png";
import vorod from "../../assest/vorod.png"
import { Link } from "react-router-dom";
import Menu from "../Landing/Menu.js";
const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div>

        <header className={styles.header}> 

            <div className={styles.listend}>
            <div className={styles.btn}>
            <button>تماس با ما</button>
            </div>
            <Link to="/Login">
            <div className={styles.sun}>
            <img src={vorod} alt='vorod'/>
            <p>ورود</p>
            </div>
            </Link>
            </div>

            <div className={styles.hamburgermenu}>
            <Hamburger rounded size={20} label="Show menu" direction="right" color="#fff" easing="ease-in" distance="lg" toggled={isOpen} toggle={setOpen} />
            {isOpen && ( <Menu />)}
            </div>

            <div className={styles.listContainer}>

                <ul className={styles.list}>
                    <li><Link to="/home">صفحه اصلی </Link> </li>
                    <li><Link to="/service">سرویس ها </Link></li>
                    <li><Link to="/nemone">نمونه کار ها</Link></li>
                    <li><Link to="/aboutus">درباره ما</Link></li>
                </ul>
            <div className={styles.logo}>
                <img className={styles.logo} src={logo} alt='Logo'/>
            </div>
            </div>
            
           </header>
        </div>
    );
};

export default Navbar;