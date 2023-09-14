import React,{ useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "../Landing/Owlcarousel.module.css"
import Card from './Card';
import iconp from"../../assest/iconp.png";
import icons from"../../assest/icons.png";
import iconm from"../../assest/iconm.png";


const Owlcarousel = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1 ,
              initialSlide: 1
            }
          },

        ]
      };
      
    const [card, setCard] = useState(
        {id:1 , image:iconp , name:"تیمی کامل و کاربلد" , introduce:"تیم ما متشکل از تمامی افراد متخصصی است که می توانند برای شما تحربه دریافت یک پروژه ایده آل را رقم بزنند"},
        {id:2 , image:icons , name:"پشتیبانی 24 ساعته" , introduce:"سرویس پشتیبانی ما قدرت گرفته از رایچت می تواند در 24 ساعت روز در صورت نیاز پاسخگوی شما باشد"},
        {id:3 , image:iconm , name:"تحویل سریع پروژه" , introduce:"اعضای تیم ما به منظور طراحی و ارایه پروژه ای حرفه ای در سریع ترین زمان ممکن آموزش دیده شده اند" },
        );
    return (
      <div>
        <div className={styles.container}  >      
           <div style={{marginBottom: "20px"}} >      
           <div className={styles.headermtn}>      
           <h2>رضایت را به شما هدیه می دهیم</h2>
           <p>تیم ما آماده است تا خدماتش را برای پروژه های مختلف شما ارایه دهد.پروژه شما هر چه که باشد ما آهن را کاملا مطابق با میل شما و چیزی که درخواست کرده اید در سریع ترین زمان ممکن و با نازل ترین قیمت برای شما آماده می کنیم و تحویل می دهیم</p> 
           </div>      
           </div>  
        </div>  
       
       <div className={styles.fluid} >   

         <Slider {...settings}  >  
            <Card image={iconp} name="تیمی کامل و کاربلد" introduce="تیم ما متشکل از تمامی افراد متخصصی است که می توانند برای شما تحربه دریافت یک پروژه ایده آل را رقم بزنند" />
            <Card image={icons} name="پشتیبانی 24 ساعته" introduce="سرویس پشتیبانی ما قدرت گرفته از رایچت می تواند در 24 ساعت روز در صورت نیاز پاسخگوی شما باشد"/>
            <Card image={iconm} name="تحویل سریع پروژه" introduce="اعضای تیم ما به منظور طراحی و ارایه پروژه ای حرفه ای در سریع ترین زمان ممکن آموزش دیده شده اند"  />
            <Card image={iconp} name="تیمی کامل و کاربلد" introduce="تیم ما متشکل از تمامی افراد متخصصی است که می توانند برای شما تحربه دریافت یک پروژه ایده آل را رقم بزنند" />
            <Card image={icons} name="پشتیبانی 24 ساعته" introduce="سرویس پشتیبانی ما قدرت گرفته از رایچت می تواند در 24 ساعت روز در صورت نیاز پاسخگوی شما باشد" />
            <Card image={iconm} name="تحویل سریع پروژه" introduce="اعضای تیم ما به منظور طراحی و ارایه پروژه ای حرفه ای در سریع ترین زمان ممکن آموزش دیده شده اند"  />       
         </Slider> 

        </div> 
    </div>
    );
};

export default Owlcarousel;