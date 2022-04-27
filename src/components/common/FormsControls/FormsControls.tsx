import React from 'react'
import s from './FormsControls.module.css';
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {ValidatorsType} from "../../../utils/validators";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}


//hoс для инпутов который оборачивает его в div с нужным классом
const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    let hasError = touched && error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (<FormControl {...props} ><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;

    return (<FormControl {...props} ><input {...input} {...restProps}/></FormControl>)
}


export function createFormField<KeysType extends string >(
    placeholder: string | undefined,
    name: KeysType,
    validators: Array<ValidatorsType>,
    component: React.ComponentType<WrappedFieldProps>,
    props = {}, text = '') {

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