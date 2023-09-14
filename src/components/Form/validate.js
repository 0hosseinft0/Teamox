
export const validate = (data , type) => {


    const errors = {};


    if (!data.email) {
        errors.email ="ایمیل خود را وارد کنید"
    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email ="ایمیل نادرست است"
    }else{
        delete errors.email
    }

    if (!data.password) {
        errors.password ="رمز عبور خود را وارد کنید"
    }else if(data.password.length < 6){
        errors.password ="رمز عبور باید حداقل 6 کراکتر یا بیشتر داشته باشد"
    } else {
        delete errors.password
    }



    if(type === "signup")  {

        if (!data.name.trim()) {
            errors.name = "نام خود را وارد کنید"
        } else {
            delete errors.name
        }
        if(!data.confirmpassword) {
        errors.confirmpassword ="رمز هبور خود را تکرار کنید"
    } else if (data.confirmpassword !== data.password ) {
        errors.confirmpassword ="رمز عبور  با یکدیگر تفاوت دارد"
    } else {
        delete errors.confirmpassword
    }
    
    if (data.isAccepted) {
        delete errors.isAccepted
    } else {
        errors.isAccepted ="قوانین را نپذیرفتید"
    }

    }

    return errors;
}

