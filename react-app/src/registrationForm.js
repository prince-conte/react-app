import React, { Component } from 'react';
// !!! not PropTypes in React - import from 'prop-types'
// import PropTypes from 'prop-types'

class RegistrationForm extends  Component {
    // static propTypes = {
    //
    // };

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form submitted Email value is ', this.state.email);
    }

    handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({ email: event.target.value })
    }

    render() {

        return (

            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    />
                <button>Save</button>
            </form>

        )

    }

}

export default RegistrationForm;