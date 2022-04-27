import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Input, createFormField} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css";
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export type LoginFormValuesType = {
    captcha: string,
    rememberMe: boolean,
    email: string,
    password: string,
}
type LoginFormPropertiesType = keyof LoginFormValuesType

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {

    const onSubmit = (formData: LoginFormValuesType) => {

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (<div>
                <h2>Login</h2>
                <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
            </div>)
}

//описываем пропсы которые инжектит reduxForm, для него в <> пишем тип для формы, тип для компоненты(чтобы RF их тоже принял), к нему & тип для компоненты
//<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps >& LoginFormOwnProps>
const LoginForm: React.FC<
    InjectedFormProps<LoginFormValuesType,LoginFormOwnProps >
    & LoginFormOwnProps> = ({handleSubmit,captchaUrl, error}) => {

    return <form onSubmit={handleSubmit}>
        {createFormField<LoginFormPropertiesType>('Email', "email", [requiredField,], Input, )}
        {createFormField<LoginFormPropertiesType>('Password', 'password', [requiredField,], Input, {type: "password"})}
        {createFormField<LoginFormPropertiesType>(undefined, "rememberMe", [], Input, {type: "checkbox"}, 'remember me')}
        <div><button type={'submit'}>Login</button></div>
        {captchaUrl && createFormField<LoginFormPropertiesType>('symbols', 'captcha', [], Input, {}, 'type captcha')}
        {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
        {error && <div><span className={style.formSummaryError}>{error}</span></div>}
    </form>
}
//
const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFormOwnProps, string>({
    form: 'loginForm',
})(LoginForm)

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchToPropsType = {
    login: (email: string, password: string,rememberMe: boolean,captcha: string) => void,
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType=>({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, {login,})(Login)