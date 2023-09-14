import React, { useState }from 'react';
import styles from "../Landing/Comment.module.css"
import Card from './Card';
import me from "../../assest/me.png"
import salar from "../../assest/salar.png"
import majid from "../../assest/majid.png"
import sorat from "../../assest/sorat.png"
import smile from "../../assest/smile.png"
import heart from "../../assest/heart.png"
import people from "../../assest/people.png"
import khalaghiat from "../../assest/khalaghiat.png"
import keifieat from "../../assest/keifieat.png"

const Tab1 = () =>{
    return(
        <div className={styles.card}>
        <Card image={me} name="حصین فیض طالبی" mozoh="لوح سیاه" introduce="تجربه کار با تیموکس عالی بود.من اصولا آدمی هستم که پروژه هام رو دست هرکسی نمی سپارم و اسن برام خیلی مهم بود چون پروژه لوح سیاه یک پروژه حساس بود و نمی شد اون رو به هرکسی سپرد. با این حال تیموکس خودش رو به خوبی ثابت کرد و از پس پروژه من بر اومد.اونها به صورت نوین با علم روز دنیا پروژه هاشون رو انجام میدن و در سریع ترین زمان ممکن اون رو به شما تحویل می دهند."/>   
        </div>
    )
  }
  
  const Tab2 = () =>{
    return(
        <div className={styles.card}>
        <Card image={salar} name="سالار رضایی" mozoh="مستر هنرستان" introduce="تجربه کار با تیموکس عالی بود.من اصولا آدمی هستم که پروژه هام رو دست هرکسی نمی سپارم و اسن برام خیلی مهم بود چون پروژه لوح سیاه یک پروژه حساس بود و نمی شد اون رو به هرکسی سپرد. با این حال تیموکس خودش رو به خوبی ثابت کرد و از پس پروژه من بر اومد.اونها به صورت نوین با علم روز دنیا پروژه هاشون رو انجام میدن و در سریع ترین زمان ممکن اون رو به شما تحویل می دهند."/>
        </div>
    )
  }
  const Tab3 = () =>{
    return(
        <div className={styles.card}>
        <Card image={majid} name="مجید نوری" mozoh="فیلموکس" introduce="تجربه کار با تیموکس عالی بود.من اصولا آدمی هستم که پروژه هام رو دست هرکسی نمی سپارم و اسن برام خیلی مهم بود چون پروژه لوح سیاه یک پروژه حساس بود و نمی شد اون رو به هرکسی سپرد. با این حال تیموکس خودش رو به خوبی ثابت کرد و از پس پروژه من بر اومد.اونها به صورت نوین با علم روز دنیا پروژه هاشون رو انجام میدن و در سریع ترین زمان ممکن اون رو به شما تحویل می دهند." />
        </div>
    )
  }

  const Tab4 = () =>{
    return(
        <div className={styles.card}>
        <Card image={salar} name="سالار رضایی" mozoh="مدرسه استادی" introduce="تجربه کار با تیموکس عالی بود.من اصولا آدمی هستم که پروژه هام رو دست هرکسی نمی سپارم و اسن برام خیلی مهم بود چون پروژه لوح سیاه یک پروژه حساس بود و نمی شد اون رو به هرکسی سپرد. با این حال تیموکس خودش رو به خوبی ثابت کرد و از پس پروژه من بر اومد.اونها به صورت نوین با علم روز دنیا پروژه هاشون رو انجام میدن و در سریع ترین زمان ممکن اون رو به شما تحویل می دهند."/>
        
        </div>
    )
  }
  
  const Tab5 = () =>{
    return(
        <div className={styles.card}>
        <Card image={me} name="حصین فیض طالبی" mozoh="پولگرام" introduce="تجربه کار با تیموکس عالی بود.من اصولا آدمی هستم که پروژه هام رو دست هرکسی نمی سپارم و اسن برام خیلی مهم بود چون پروژه لوح سیاه یک پروژه حساس بود و نمی شد اون رو به هرکسی سپرد. با این حال تیموکس خودش رو به خوبی ثابت کرد و از پس پروژه من بر اومد.اونها به صورت نوین با علم روز دنیا پروژه هاشون رو انجام میدن و در سریع ترین زمان ممکن اون رو به شما تحویل می دهند." />
        </div>
    )
  }
  const Tab6 = () =>{
    return(
        <div className={styles.card}>
        <Card image={majid} name="مجید نوری" mozoh="الواملاک" introduce="تجربه کار با تیموکس عالی بود.من اصولا آدمی هستم که پروژه هام رو دست هرکسی نمی سپارم و اسن برام خیلی مهم بود چون پروژه لوح سیاه یک پروژه حساس بود و نمی شد اون رو به هرکسی سپرد. با این حال تیموکس خودش رو به خوبی ثابت کرد و از پس پروژه من بر اومد.اونها به صورت نوین با علم روز دنیا پروژه هاشون رو انجام میدن و در سریع ترین زمان ممکن اون رو به شما تحویل می دهند."/>
        </div>
    )
  }

const Comment = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
      setActiveTab("tab1");
    };
    const handleTab2 = () => {
      setActiveTab("tab2");
    };
    const handleTab3 = () => {
      setActiveTab("tab3");
    };
    const handleTab4 = () => {
      setActiveTab("tab4");
    };
    const handleTab5 = () => {
      setActiveTab("tab5");
    };
    const handleTab6 = () => {
      setActiveTab("tab6");
    };

    return (
        <div className={styles.container}>
         <div className={styles.container}  >      
           <div style={{marginBottom: "20px"}} >      
           <div className={styles.headermtn}>      
           <h2>می گذاریم شما به جای ما صحبت کنید...</h2>
           <p>ما نظر سایرین را نیز با شما عزیزان به اشتراک می گذاریم.با شنیدن نظر مشتری های ما درباره تیموکس و تجربه ای که در کار با ما داشته اند,از همکاری با مااطمینان خاطر حاصل کنید.</p> 
           </div>      
           </div>  
         </div>  
        
            <div className={styles.tabs}>

            <div className="outlet">

{activeTab === "tab1" ? <Tab1 style={{borderRadius: '10px',color:'red'}} /> : <></>}
{activeTab === "tab2" ? <Tab2 style={{borderRadius: '10px',color:'red'}} /> : <></>}
{activeTab === "tab3" ?<Tab3 style={{borderRadius: '10px',color:'red'}} />:<></>}
{activeTab === "tab4" ? <Tab4 style={{borderRadius: '10px',color:'red'}} /> : <></>}
{activeTab === "tab5" ? <Tab5 style={{borderRadius: '10px',color:'red'}} /> : <></>}
{activeTab === "tab6" ?<Tab6 style={{borderRadius: '10px',color:'red'}} />:<></>}
</div>

      <div className={styles.tablink} >

        <p onClick={handleTab1} 
        className={activeTab === "tab1" ? "active" : ""} 
        style={{borderRadius: '0 10px 10px 0'}}
        >
          <img src={sorat}/>
        سرعت تحویل
        </p>

        <p 
        onClick={handleTab2} 
        className={activeTab === "tab2" ? "active" : ""} 
        >
          <img src={smile}/>
        احترام به مشتری
        </p>

        <p 
        onClick={handleTab3} 
        className={activeTab === "tab3" ? "active" : ""} 
        >
          <img src={heart}/>
            اعتماد مشتری
        </p>

        <p 
        onClick={handleTab4} 
        className={activeTab === "tab4" ? "active" : ""} 
        >
          <img src={people}/>
         قدرت کار تیمی
        </p>

        <p 
        onClick={handleTab5} 
        className={activeTab === "tab5" ? "active" : ""} 
        >
          <img src={khalaghiat}/>
            نوآوری و خلاقیت
        </p>

        <p 
        onClick={handleTab6} 
        className={activeTab === "tab6" ? "active" : ""} 
        style={{borderRadius: '10px 0 0 10px'}}
        >
          <img src={keifieat}/>
        کیفیت در کار
        </p>



</div>

      </div>



        </div>
    );
};

export default Comment;