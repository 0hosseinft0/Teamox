import React, { useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate';
import {notify} from "./toast";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [data , setData]= useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data , touched])


    const changeHandler = event => {
        if (event.target.name === "isAccepted"){
            setData({...data, [event.target.name] : event.target.checked})
        }
        else {
            setData({...data, [event.target.name] : event.target.value})
        }
    }
    const focusHandler = event => {
        setTouched({ ...touched, [event.target.name] : true})
    }
    const submitHandler = event => {
        event.preventDefault();
        notify()
        if (!Object.keys(errors).length){
            notify("با موفقیت ثبت شد" ,"success")
        }else{
            notify("خطا","error")
            setTouched({
                name: true ,
                email: true ,
                password: true ,
                confirmpassword: true ,
                isAccepted: true 
            })
        }
    }
    
    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h1 className={styles.header}>ثبت نام</h1>

                <div className={styles.formField}>

                    <label>نام</label>
                    <input className={(errors.name && touched.name)? styles.uncompleted : styles.formInput} type="text" name="name" value={data.name}onChange={changeHandler}  onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}

                </div>

                <div className={styles.formField}>

                    <label>ایمیل</label>
                    <input className={(errors.email && touched.email)? styles.uncompleted : styles.formInput} type="text" name="email" value={data.email}onChange={changeHandler} onFocus={focusHandler} />
                    {errors.email && touched.email &&<span>{errors.email}</span>}

                </div>

                <div className={styles.formField}>

                    <label>رمز عبور</label>
                    <input className={(errors.password && touched.password)? styles.uncompleted : styles.formInput} type="password" name="password" value={data.password}onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>

                <div className={styles.formField}>

                    <label>تکرار رمز عبور</label>
                    <input className={(errors.confirmpassword && touched.confirmpassword)? styles.uncompleted : styles.formInput} type="password" name="confirmpassword" value={data.confirmpassword}onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}

                </div>

                <div className={styles.formField}>

                    <div className={styles.checkBoxContainer}>
                    <label>قوانین را قبول می کنم</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted}onChange={changeHandler} onFocus={focusHandler}/>

                    </div>

                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}

                </div>

                <div className={styles.formButtons}>

                    <Link to='/Login'>ورود</Link>
                    <button type="submit">ثبت نام</button>

                </div>

            </form>
            
            <ToastContainer  />

        </div>

    );
};

export default SignUp;