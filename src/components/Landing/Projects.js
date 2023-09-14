import React from 'react';
import styles from "../Landing/Projects.module.css"
import Card from './Card';
import filmox from "../../assest/filmox.png"
import mados from "../../assest/mados.png"
import lohsia from "../../assest/lohsia.png"
import polgram from "../../assest/polgram.png"
import aloamlak from "../../assest/aloamlak.png"
import mrhonarestan from "../../assest/mrhonarestan.png"
const Projects = () => {
    return (
    <div className={styles.container}>
        <div className={styles.container}  >      
            <div style={{marginBottom: "20px"}} >      
                <div className={styles.headermtn}>      
                    <h2>این ها بهترین تجربه های کاری ما هستند!</h2>
                    <p>خوشبختانه تیموکس توانسته است که امتحانش را در زمینه نمونه کار و طراحی پروژه ها بی نقص پاس کند و شما می توانید شاهد آرشیوی کامل از نمونه کار های ما باشید که کیفیت کار ما را به شما ثابت خواهند کرد.برسی کنید.لذت ببرید.</p> 
                </div>
                <div className={styles.btn}>
                    <button>نمایش نمونه کارها</button>
                </div>      
            </div> 
        </div>

        <div className={styles.card}>

        <Card image={filmox} name="فیلموکس" introduce="به ارشیوی +1000 ساعت فیبم و سریال سلام کنید.فیلموکس کامل ترین مرجع دانلود فیلم سریال است" />
        <Card image={mados} name="مدرسه استادی" introduce="اگر به مرجع جدیدی برای آموزش های خود احتیاج دارید مدرسه استادی میتواند پاسخگوی شما باشد"/>
        <Card image={lohsia} name="لوح سیاه" introduce="سامانه هوشمند مدارس لوح سیاه اینجاست تا شما را در مدیریت بهتر مدرسه تان همراهی کند!" />
        <Card image={polgram} name="پولگرام" introduce="به دنبال منبعی جامع برای انتشار رای گیری و سوالات تان هستید؟پولگراک این امکان را برایتان فراهم آورده است!" />
        <Card image={aloamlak} name="الو املاک" introduce="یافتن ملک مورد نظرتان در دوران کرونا دشوار شده است؟با الواملاک در اوبین فرصت خانه دار شوید!"/>
        <Card image={mrhonarestan} name="مستر هنرستان" introduce="اولبن مرجع بزرگ آموزشی جامع رشته فنی و حرفه ای با تاییدیه رسمی از وزارت آموزش پرورش."/>

        </div>

    </div>
    );
};

export default Projects;