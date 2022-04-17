import React from 'react'
import s from './FormsControls.module.css';
import {Field} from "redux-form";
import style from "./FormsControls.module.css";

const FormControl = ({input, meta: {touched, error}, children,  ...props}) => {
    let hasError = touched && error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')} >
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, ...restProps} = props;
    return (<FormControl {...props} ><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props) => {
    const {input, ...restProps} = props;

    return (<FormControl {...props} ><input {...input} {...restProps}/></FormControl>)
}

export const createFormField = (placeholder, name, validators, component, props={}, text='') => {

    return (<div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        />
        {text && <span>{text}</span>}
    </div>)

}