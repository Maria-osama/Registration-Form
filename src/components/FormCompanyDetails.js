import React, { Component } from 'react';

class FormCompanyDetails extends Component {
    state = {
        errors : {}
    }
    next = e => {
        e.preventDefault();
        let errors = {};
        let isValid = true;

        // if Form validation passed, then move to next form page (step + 1) 

        let companyName = document.getElementById("companyName").value.trim(),
            address = document.getElementById("address").value.trim(),
            businessEmail = document.getElementById("inputBusinessEmail").value.trim(),
            city = document.getElementById("city").value.trim(),
            companyNumber = document.getElementById("companyNumber").value.trim();

        let emailRgx = /^[A-Za-z0-9.]{1,64}@[A-Za-z0-9.]{1,64}$/

        if (companyName == "") {
            errors['companyName'] = 'Please enter your company name'
           // companyName.style.border
            isValid = false;
        }


        if (address == "") {
            errors['address'] = 'Please enter company address'
            isValid = false;
        }


        if (businessEmail == "") {
            errors['business_email'] = 'Please enter your business email'
            isValid = false;
        }
        if (!emailRgx.test(businessEmail)) {
            errors['business_email'] = 'Please enter a vaild email. ex: example@example.com'
            isValid = false;
        }
        if (city == "") {
            errors['city'] = 'Please enter the city'
            isValid = false;
        }
        if (companyNumber == "") {
            errors['companyNumber'] = 'Please enter company Number'
            isValid = false;
        }
        

        this.setState({ errors: errors })

        if (isValid) {
            this.props.nextStep()
        }

     
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        const { handleChange, companyName, companyAddress, companyBusinessEmail, companyCountry, companyCity, companyPhoneNumber } = this.props;
        return (
            <div>
                <h3 className="title">Verify you company.</h3>
                <section>

    
                <div className={this.state.errors["companyName"] ? "form-group red-border" : 'form-group'} id="holder">
                    <label for="companyName">COMPANY NAME</label>
                    <input type="text" value={companyName} onChange={handleChange("companyName")} id="companyName" placeholder="Please enter your company Name" />
                    <span style={{ color: "red" }}>{this.state.errors["companyName"]}</span>
                </div>

                
                <div className={this.state.errors["address"] ? "form-group red-border" : 'form-group'} id="holder">
                    <label for="address">ADDRESS</label>
                    <input type="text" value={companyAddress} onChange={handleChange("companyAddress")} id="address" placeholder="Enter your address" />
                    <span style={{ color: "red" }}>{this.state.errors["address"]}</span>
                </div>

                <div className={this.state.errors["business_email"] ? "form-group red-border" : 'form-group'} id="holder">
                    <label for="inputBusinessEmail">BUSINESS EMAIL</label>
                    <input type="email" value={companyBusinessEmail} onChange={handleChange("companyBusinessEmail")} id="inputBusinessEmail" placeholder="Enter your Business Email" />
                    <span style={{ color: "red" }}>{this.state.errors["business_email"]}</span>
                </div>

                <div className="form-row">
                    <div className= "form-group col-md-6"  id="holder">
                        <label for="country">COUNTRY</label>
                        <select id="country" onChange={handleChange("companyCountry")}  className="form-control" onChange={handleChange} >
                            <option selected>Egypt</option>
                            <option>KSA</option>
                            <option>USA</option>
                        </select>
                    </div>
                    <div className={this.state.errors["city"] ? "form-group col-md-6 red-border" : 'form-group col-md-6'} id="holder">
                        <label for="city">CITY</label>
                        <input type="text" value={companyCity} onChange={handleChange("companyCity")}  id="city" placeholder="Choose your city" />
                        <span style={{ color: "red" }}>{this.state.errors["city"]}</span>
                    </div>
                        </div>

                    <div className="form-row">
                        <div className={this.state.errors["companyNumber"] ? "form-group col-md-6 red-border" : 'form-group col-md-6'} id="holder">
                            <label for="companyNumber">COMPANY PHONE NUMBER</label>
                           <input id="companyNumber" type="text" onChange={handleChange("companyPhoneNumber")} value={companyPhoneNumber} placeholder="Enter your company phone number"/>
                           <span style={{ color: "red" }}>{this.state.errors["companyNumber"]}</span>
                        </div>
                        <div className={this.state.errors["companyNumber"] ? "form-group col-md-6 red-border" : 'form-group col-md-6'} id="holder">
                            <label for="companyNumber">COMPANY PHONE NUMBER</label>
                           <input id="companyNumber" type="text" onChange={handleChange("companyPhoneNumber")} value={companyPhoneNumber} placeholder="Enter your company phone number"/>
                           <span style={{ color: "red" }}>{this.state.errors["companyNumber"]}</span>
                        </div>
                    </div>
                
                
                </section>
                <div style={{"text-align": "right"}}>
                <button className="back" onClick={this.back}>Back</button>
                <button className="next" onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}
export default FormCompanyDetails;