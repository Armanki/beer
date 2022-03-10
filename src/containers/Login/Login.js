import {useForm} from "react-hook-form";
import style from "./Login.module.scss";

let counter = 0;

const Login = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (d) => {
        alert(JSON.stringify(d));
    }

    return (

        <div className={style.login}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <label>
                    <b>User Name</b>
                    <input {...register("userName")} type="text" className={style.uName} placeholder="User Name"/>
                </label>
                <label>
                    <b>Password</b>
                    <input {...register("password")} type="password" className={style.pass} placeholder="Password"/>
                </label>

                <p>Render: <span>{counter++}</span></p>
                <input type="submit" value="submit" className={style.log}/>
                <p>Forgot <a href="#">Password</a></p>
            </form>
        </div>
    )
}
export default Login;