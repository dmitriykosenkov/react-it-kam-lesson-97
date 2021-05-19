import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm, reset } from "redux-form";
import { loginThunkCreator, logoutThunkCreator } from "../../redux/auth-reducer";
import { required } from "../../validators/validators";
import { Input } from "../commons/FormControls/FormControls";
import styles from "../commons/FormControls/FormControls.module.css"

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field name={"email"} component={Input}
               validate={[required]} placeholder={"email"} />
         </div>
         <div>
            <Field name={"password"} component={Input} validate={[required]} placeholder={"password"} type={"password"} />
         </div>
         <div>
            <Field name={"rememberMe"} component={Input} type="checkbox" /> Remember Me
         </div>
         {props.error && <div className={styles.formSubmitError}>
            {props.error}
         </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

// очистка полей, и свойство onSubmitSuccess в reduxForm
// const afterSubmit = (result, dispatch) => dispatch(reset("login"));

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
   const onSubmit = formData => {
      props.loginThunkCreator(formData.email, formData.password, formData.rememberMe);
   }

   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }

   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps, { loginThunkCreator })(Login);