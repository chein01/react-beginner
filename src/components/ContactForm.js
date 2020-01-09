import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { reset } from 'redux-form';


class ContactForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(reset("contact"));
        this.props.handleSubmit();
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email" class="email-lable">Email</label>
                    <Field name="email" component="input" type="text" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        )
    }
}

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm)
export default ContactForm
