import React from "react";

class Form extends React.Component {
    state= {
        firstName: '',
        email: '',
        message: '',
        select: '',
        gender: '',
        isAgreeWithTerms: false,
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleCheckbox = (event) => {
        this.setState({[event.target.name]: event.target.checked});

    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert(`first name can't be less than 5 letters`)
        }
    }

    validateEmail = () => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.
            test(this.state.email)) {
                alert('email is not valid')
                return false;
        }
        return true;
    }

    validateAndSend = () => {
        if(!this.state.isAgreeWithTerms) {
            alert('You must agree to the User Agreement')
            return;
        }
        if (this.validateEmail() && this.state.isAgreeWithTerms) {
            alert('Thanks for subscribing!')
        }
        this.setState({email: '', isAgreeWithTerms: false })
    }


    render () {
        const {firstName, email, message, select, gender, isAgreeWithTerms } = this.state;

        return <div>
            <input type="text" 
            name="firstName"
            placeholder="firstName" 
            value={firstName}
            onChange={this.handleChange}
            onBlur={this.validateName}
            />
            <br />
            <textarea name="message" value={message} onChange={this.handleChange}></textarea>
            <br />
            <select name="select" value={select} onChange={this.handleChange} >
                <option value="" disabled></option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <br />
            <br />
            <input type="radio" 
            name="gender"
            value="male"
            onChange={this.handleChange}
            checked = {gender === 'male'}
            /> Male
            <input type="radio" 
            name="gender"
            value="female"
            onChange={this.handleChange}
            checked = {gender === 'female'}
            /> Female
            <br />
            <br />
            <br />
            <input type="email" 
            name="email"
            placeholder="email" 
            value={email}
            onChange={this.handleChange}
            onBlur={this.validateEmail}
            />
            <br />
            <label>
                <input
                    type="checkbox"
                    name="isAgreeWithTerms"
                    checked={isAgreeWithTerms}
                    onChange={this.handleCheckbox}
                />
                I agree with terms and conditions
            </label>
            <br />
            <button onClick={this.validateAndSend}>Send</button>
        </div>
    }
}

export {Form};