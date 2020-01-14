import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { reset } from 'redux-form';


class ContactForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(reset("contact"));
        this.props.handleSubmit();
    }
    componentDidUpdate(previouProps) {
        if (previouProps.contact !== this.props.contact) {
            this.props.contact && this.props.initialize(this.props.contact);
        }

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
                    <label htmlFor="email" className="email-lable">Email</label>
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
    form: 'contact',
    enableReinitialize: true
})(ContactForm)

export default ContactForm;