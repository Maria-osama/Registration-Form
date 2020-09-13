import React, { Component } from 'react';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import FormCompanyDetails from './FormCompanyDetails';
import FormConfirmation from './FormConfirmation';
import FormUserDetails from './FormUserDetails';
import mailbox from '../mailbox.png';

class Form extends Component {
    state = {
        step: 0,

        fullName: '',
        businessEmail: '',
        country: '',
        phoneNumber: '',
        password: '',
        repeatPassword: '',

        companyName: '',
        companyAddress: '',
        companyBusinessEmail: '',
        companyCountry: '',
        companyCity: '',
        companyPhoneNumber: ''

    }
    showStep = (step) => {
        const { fullName, businessEmail, country, phoneNumber, password, repeatPassword,
            companyName, companyAddress, companyBusinessEmail, companyCountry, companyCity, companyPhoneNumber } = this.state;
        switch (step) {
            case 0:

                return (
                    <div>
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            fullName={fullName}
                            businessEmail={businessEmail}
                            country={country}
                            phoneNumber={phoneNumber}
                            password={password}
                            repeatPassword={repeatPassword}
                        />
                    </div>
                )

            case 1:
                return (<FormCompanyDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    companyName={companyName}
                    companyAddress={companyAddress}
                    companyBusinessEmail={companyBusinessEmail}
                    companyCountry={companyCountry}
                    companyCity={companyCity}
                    companyPhoneNumber={companyPhoneNumber}
                />)

            case 2:
                return (<FormConfirmation email={businessEmail} prevStep={this.prevStep} confirm={this.confirm} />)
        }
    }
    // go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    // handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });

    }
    confirm = e => {
        fetch('https://id.safav2.io.safavisa.com/register', {
            method: 'POST',
            headers: {

            },
            body: {
                user_email: this.state.businessEmail,
                user_password: this.state.password,
                user_password_confirmation: this.state.repeatPassword,
                lang: 'ar',
                company_name: this.state.companyName,
                company_address: this.state.companyAddress,
                company_phone: this.state.companyPhoneNumber,
                company_business_email: this.state.companyBusinessEmail,
                company_avatar: mailbox,
                company_country_id: 20,
                company_city_id: 5,
                company_extra_data: this.state.phoneNumber,
                user_full_name: this.state.fullName,
                user_phone: this.state.phoneNumber,
                user_position: 'the position',
                user_nationality: 20,
                user_extra_data: 2342342342342343242
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        const { step } = this.state;
       
        return (
            <div className="center-stepper">
                <Stepper activeStep={step} orientation="horizontal">
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
                {this.showStep(step)}
            </div>


        );
    }
}
export default Form;