import React from 'react'
import s from './FormsControls.module.css';

const FormControl = ({input, meta, element, ...props}) => {
    let hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')} >
            {props.children}
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