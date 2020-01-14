import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { reset } from 'redux-form';


class ContactForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(reset(this.props.form));
        this.props.handleSubmit();

    }
    componentDidUpdate(preProps, preState) {
        // console.log("22", this.props.initialValues);
        // if (preProps.initialValues !== this.props.initialValues) {
        //     console.log(this.props.initialValues);
        // }
    }
    componentDidMount() {
        console.log(this.props);
        this.props.contact &&
            this.props.initialize({
                firstName: "Roger",
                email: "admin@amin.a"
            });
        // this 
        // state usser
        // this.props.({
        //     firstName: "AD"
        // });

    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit((values) => this.handleSubmit(values))}>
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