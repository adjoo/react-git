import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (<div>
                <h2>Login</h2>
                <ReduxLoginForm onSubmit={onSubmit}/>
            </div>)
}

const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field type="text" placeholder={'email'} name={'email'} component={Input} validate={[requiredField,]}/>
        <Field type="password" placeholder={'Password'} name={'password'} component={Input} validate={[requiredField,]}/>
        <Field type="checkbox" component={Input} name={'remember'}/>
        <span> remember me </span>
        {props.error && <span className={style.formSummaryError}>{props.error}</span>}
        <div><button type={'submit'}>Login</button></div>
    </form>
}

const ReduxLoginForm = reduxForm({
    form: 'loginForm',
})(LoginForm)

const mapStateToProps = (state)=>({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login,})(Login)