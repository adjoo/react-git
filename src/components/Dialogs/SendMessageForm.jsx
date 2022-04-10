import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);


const SendMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea}
               name={"newMessageBody"}
               validate={[requiredField, maxLength50,]}
               placeholder={"type here..."}/>
        <button>Send</button>
    </form>

}

const AddMessageFormRedux = reduxForm({
    form : "sendMessageForm",
})(SendMessageForm)

export default AddMessageFormRedux