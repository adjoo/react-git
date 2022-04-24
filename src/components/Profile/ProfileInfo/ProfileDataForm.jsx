import React from 'react'
import style from "./ProfileInfo.module.css";
import ProfileInfoItem from "./ProfileInfoItem";
import {createFormField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import styleFormsControls from "../../common/FormsControls/FormsControls.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators";
import {ProfileType} from "../../../types/types";



//InjectedFormProps принимает два параметра: FormProps = {}и P={}.
// Первый представляет данные формы, которые будут помещены в форму, а второй — реквизит нашего компонента.
const ProfileDataForm = ({
                          handleSubmit, initialValues, profile, error, ...props
                      }) => {

    return <form className={style.profileOptions} onSubmit={handleSubmit}>
        <ProfileInfoItem title={"Full Name"}
                         value={createFormField('your name', 'fullName', [requiredField,], Input,)}/>
        <ProfileInfoItem title={"Looking for a job"}
                         value={createFormField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}/>
        <ProfileInfoItem title={"My professional skills"}
                         value={createFormField('...', 'lookingForAJobDescription', [], Textarea,)}/>
        <ProfileInfoItem title={"About me"}
                         value={createFormField('...', 'aboutMe', [], Textarea,)}/>
        {Object.keys(profile.contacts).map(key => {
            return <ProfileInfoItem key={key} title={key}
                                    value={createFormField(`your ${key} :`, `contacts.${key}`, [], Input,)}/>
        })}

        <div className={style.profileFormButton}>
            <button type={'submit'}>save</button>
        </div>
        {error && <div className={styleFormsControls.formSummaryError}>{error}</div>}
    </form>
}

export default reduxForm({form: 'editProfile'})(ProfileDataForm)