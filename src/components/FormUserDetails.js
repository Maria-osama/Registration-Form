import React, { Component } from 'react';

class FormUserDetails extends Component {
    state = {
        errors: {},
        passwordType: 'password',
        repeatPasswordType: 'password'

    }
    showHide1 = () => {
        this.setState(({passwordType}) => ({
            passwordType: passwordType === 'text' ? 'password' : 'text'
          }))
    }
    showHide2 = () => {
        this.setState(({repeatPasswordType}) => ({
            repeatPasswordType: repeatPasswordType === 'text' ? 'password' : 'text'
          }))
    }
    next = e => {
        e.preventDefault();
        let errors = {};
        let isValid = true;

        // if Form validation passed, then move to next form page (step + 1) 

        let full_name = document.getElementById("inputFullName").value.trim(),
            business_email = document.getElementById("inputBusinessEmail").value.trim(),
            phone_number = document.getElementById("phoneNumber").value.trim(),
            password = document.getElementById("password").value.trim(),
            repeatpassword = document.getElementById("repeatpassword").value.trim();

        let emailRgx = /^[A-Za-z0-9.]{1,64}@[A-Za-z0-9.]{1,64}$/

        if (full_name == "") {
            errors['full-name'] = 'Please enter your full name';
           // full_name.style.borderColor = '1px solid red';
            isValid = false;
        }


        if (business_email == "") {
            errors['business_email'] = 'Please enter your business email';
          //  business_email.style.border = '1px solid red';
            isValid = false;
        }

        if (!emailRgx.test(business_email)) {
            errors['business_email'] = 'Please enter a vaild email. ex: example@example.com';
          //  business_email.style.border = '1px solid red';
            isValid = false;
        }


        if (phone_number == "") {
            errors['phone_number'] = 'Please enter your phone number';
         //   phone_number.style.border = '1px solid red';
            isValid = false;
        }
        if (password == "") {
            errors['password'] = 'Please enter your password';
          //  password.style.border = '1px solid red';
            isValid = false;
        }
        if (repeatpassword == "") {
            errors['repeatpassword'] = 'Please repeat your password';
         //   repeatpassword.style.border = '1px solid red';
            isValid = false;
        }
        if (repeatpassword !== password) {
            errors['repeatpassword'] = 'Password is not matching';
          //  repeatpassword.style.border = '1px solid red';
            isValid = false;
        }

        this.setState({ errors: errors })

        if (isValid) {
            this.props.nextStep()
        }

    }
    render() {
        const { handleChange, fullName, businessEmail, phoneNumber, password, repeatPassword } = this.props;
        return (
            <div>
                <h3 className="title">Tell us more about you.</h3>
                <section>
                    <div className={this.state.errors["full-name"] ? "form-group red-border" : 'form-group'} id="holder">
                        <label for="inputFullName">FULL NAME</label>
                        <input type="text" onChange={handleChange('fullName')} id="inputFullName" value={fullName} placeholder="Enter your full Name" />
                        <span style={{ color: "red" }}>{this.state.errors["full-name"]}</span>
                    </div>

                    <div className={this.state.errors["business_email"] ? "form-group red-border" : 'form-group'} id="holder">
                        <label for="inputBusinessEmail">BUSINESS EMAIL</label>
                        <input type="email" onChange={handleChange('businessEmail')} id="inputBusinessEmail" value={businessEmail} placeholder="Enter your Business Email" />
                        <span style={{ color: "red" }}>{this.state.errors["business_email"]}</span>
                    </div>


                    <div className="form-row">
                        <div className= "form-group col-md-6"  id="holder">
                            <label for="country">COUNTRY</label>
                            <select id="country"  className="form-control" onChange={handleChange("country")}>
                                <option selected>Egypt</option>
                                <option>KSA</option>
                                <option>USA</option>
                            </select>
                        </div>
                        <div className={this.state.errors["phone_number"] ? "form-group col-md-6 red-border" : 'form-group col-md-6'} id="holder">
                            <label for="phoneNumber">PHONE NUMBER</label>
                            <input type="text" onChange={handleChange('phoneNumber')} id="phoneNumber" value={phoneNumber} placeholder="Enter your phone number" />
                            <span style={{ color: "red" }}>{this.state.errors["phone_number"]}</span>
                        </div>
                    </div>

                    <div className={this.state.errors["password"] ? "form-group red-border" : 'form-group'} id="holder">
                        <label for="password">PASSWORD</label>
                        <input type={this.state.passwordType} onChange={handleChange('password')} id="password" value={password} placeholder="Choose a password" />
                        <i class={this.state.passwordType == "password" ? "fa fa-eye-slash" : "fa fa-eye"} aria-hidden="true" onClick={this.showHide1}></i>
                        <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                    </div>

                    <div className={this.state.errors["repeatpassword"] ? "form-group red-border" : 'form-group'} id="holder">
                        <label for="repeatpassword">REPEAT PASSWORD</label>
                        <input type={this.state.repeatPasswordType} onChange={handleChange('repeatPassword')} id="repeatpassword" value={repeatPassword} placeholder="Repeat your password" />
                        <i className= {this.state.repeatPasswordType == "password" ? "fa fa-eye-slash" : "fa fa-eye"} aria-hidden="true" onClick={this.showHide2}></i>
                        <span style={{ color: "red" }}>{this.state.errors["repeatpassword"]}</span>
                    </div>


                </section>
                <div style={{"text-align": "right"}}>
                <button className="next" onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}
export default FormUserDetails;