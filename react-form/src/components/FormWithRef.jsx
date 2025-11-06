import React from "react";

class FormWithRef extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '', 
            email: '',
        }
        this.firstNameRef = React.createRef();
        this.emailRef = React.createRef();
    }

    handleChange = (event) => {
        this.setState(() => 
            ({[event.target.name]: event.target.value}), () => {
                if (this.state.firstName.length === 6) {
                    this.emailRef.current.focus();
            }}
        );
    }

    componentDidMount() {
        console.log(this.firstNameRef);
        this.firstNameRef.current.focus();
    }
    


    render () {
        const {email, firstName } = this.state;

        return <div>
            <input type="firstName" 
            name="firstName"
            placeholder="firstName" 
            value={firstName}
            onChange={this.handleChange}
            ref={this.firstNameRef}
            />
            <br />

            <input type="email" 
            name="email"
            placeholder="email" 
            value={email}
            onChange={this.handleChange}
            ref={this.emailRef}
            />
        </div>
    }
}

export {FormWithRef};