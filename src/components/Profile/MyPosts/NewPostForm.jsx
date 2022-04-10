import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const NewPostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField,maxLength10,]}
                       name={'newPostText'}
                       placeholder={'type here...'} />
            </div>
            <div>
                <button>Add post</button>
            </div>

    </form>
}

const NewPostFormRedux = reduxForm({
    form: "addNewPostForm",
})(NewPostForm)

export default NewPostFormRedux;
