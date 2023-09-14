import React, { Component } from 'react';
import styles from "../Landing/Header.module.css"
import icon from "../../assest/icon.png"
class Header extends Component {
    render() {
        return (
            <>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <img src={icon} />
                    </div>
                    <div className={styles.headermtn}>
                    
                    <h2>با <span style={{color:"red",}}>تیموکس</span> دیگه خیالت راحت از</h2>
                    <h2>کیفیت پروژه راحته...</h2>
                    <p>تیم ما چندین سال سابقه کاری و کارنامه ای درخشان افتخار
                        این را دارد تا برای شما عزیزان بهترین سرویس و کیفیت ممکن
                        را ارایه دهد
                        تفاوت ما با سایرین این است که ما پیش از هرچیزی شما را در اولویت قرار می دهیم
                    </p>
                    <div className={styles.btn}>
                    <button>سفارش پروژه دلخواه</button>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;