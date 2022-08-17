import { useForm } from "react-hook-form"; // custom hook for managing forms
import * as yup from "yup"; //using yup to validate form entries
import { yupResolver } from "@hookform/resolvers/yup";
import "./form.styles.css";

const Form = () => {
    //schema to shape how data should be
    const schema = yup.object().shape({
        fullName: yup.string().required("Fullname is a required field").min(6, "Full name should have at least 6 characters"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).max(120).required(),
        password: yup.string().min(6).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"),null], "Passwords don't match").required(),
    })

    const { register, handleSubmit,  formState: { errors }, } = useForm({
        resolver: yupResolver(schema),//specify the used to validate form - integration between react-hook-form and yup
    });
    
    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <form className="form" onSubmit={ handleSubmit(onSubmit)}>
        <p style={{marginBottom:"1rem"}}>UseForm custom hook, and form validation with yup example</p>
        <input type="text" placeholder="Full Name..." {...register("fullName")}/>
        <p>{ errors.fullName?.message }</p>
        <input type="text" placeholder="Email..." {...register("email")} />
        <p>{ errors.email?.message }</p>
        <input type="number" placeholder="Age..." {...register("age")} />
        <p>{ errors.age?.message }</p>
        <input type="password" placeholder="Password..." {...register("password")} />
        <p>{ errors.password?.message }</p>
        <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
        <p>{ errors.confirmPassword?.message }</p>
        <input type="submit" />
    </form>
  )
}

export default Form;