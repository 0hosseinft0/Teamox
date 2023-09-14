import React, { useState }from 'react';
import styles from "../Landing/Introduce.module.css"
import Card from './Card';
import me from "../../assest/me.png"
import salar from "../../assest/salar.png"
import majid from "../../assest/majid.png"
import niki from "../../assest/niki.png"

const Tab1 = () =>{
    return(
        <div className={styles.card}>
        <Card image={me} name="حصین فیض طالبی" introduce="برنامه نویس فرانت اند" />
        <Card image={majid} name="حسین خداپرست" introduce="برنامه نویس فرانت اند" />
        <Card image={salar} name="سالار رضایی" introduce="برنامه نویس بک اند"/>      
        <Card image={majid} name="مجید نوری" introduce="طراح رابط کاربری" />
        <Card image={niki} name="علی نیک تبار" introduce="طراح گرافیکی" />
        <Card image={majid} name="مهدی کشتکار" introduce="طراح رابط کاربری" />
        </div>
    )
  }
  
  const Tab2 = () =>{
    return(
        <div className={styles.card}>
        <Card image={me} name="حصین فیض طالبی" introduce="برنامه نویس فرانت اند" />
        <Card image={majid} name="حسین خداپرست" introduce="برنامه نویس فرانت اند" />
        <Card image={salar} name="سالار رضایی" introduce="برنامه نویس بک اند"/>  
        </div>
    )
  }
  const Tab3 = () =>{
    return(
        <div className={styles.card}>
        <Card image={majid} name="مجید نوری" introduce="طراح رابط کاربری" />
        <Card image={niki} name="علی نیک تبار" introduce="طراح گرافیکی" />
        <Card image={majid} name="مهدی کشتکار" introduce="طراح رابط کاربری" />
        </div>
    )
  }

const Introduce = () => {
  

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

    return (
        
        <div className={styles.container}>
         <div className={styles.container}  >      
           <div style={{marginBottom: "20px"}} >      
           <div className={styles.headermtn}>      
           <h2>تیم متخصص ما برای کمک اینجاست!</h2>
           <p>تیموکس متشکل از افرادی حرفه ای است که در زمینه فعالیت هایشان نهایت تجربه را کسب کرده اند.ما برای اینکه بتوانیم اعتماد شما را جلب کنیم و به لذت تجربه پروژه ای با کیفیت را هدیه دهیم,تمام تلاشمان را می کنیم</p> 
           </div>      
           </div>  
         </div>  
        
            <div className={styles.tabs}>
      <div className={styles.tablink} >

        <p onClick={handleTab1} 
        className={activeTab === "tab1" ? "active" : ""} 
        style={{cursor:'pointer',padding:'20px',margin:'0',borderRadius: '0 10px 10px 0'}}
        >
        همه اعضا
        </p>

        <p 
        onClick={handleTab2} 
        className={activeTab === "tab2" ? "active" : ""} 
        style={{cursor:'pointer',padding:'20px',margin:'0'}}
        >
        توسعه دهنده ها
        </p>

        <p 
        onClick={handleTab3} 
        className={activeTab === "tab3" ? "active" : ""} 
        style={{cursor:'pointer',padding:'20px',margin:'0',borderRadius: '10px 0 0 10px'}}
        >
        طراح ها
        </p>

      </div>

      <div className="outlet">

      {activeTab === "tab1" ? <Tab1 style={{borderRadius: '10px',color:'red'}} /> : <></>}
      {activeTab === "tab2" ? <Tab2 style={{borderRadius: '10px',color:'red'}} /> : <></>}
      {activeTab === "tab3" ?<Tab3 style={{borderRadius: '10px',color:'red'}} />:<></>}
      </div>

    </div>

        </div>
    );
};

export default Introduce;