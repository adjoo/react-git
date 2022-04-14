import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input, createFormField} from "../common/FormsControls/FormsControls";
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

const LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
        {createFormField('email', 'email', [requiredField,], Input, )}
        {createFormField('Password', 'password', [requiredField,], Input, {type: "password"})}
        {createFormField(null, 'checkbox', [], Input, {type: "checkbox"}, 'remember me')}
        {error && <span className={style.formSummaryError}>{error}</span>}
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