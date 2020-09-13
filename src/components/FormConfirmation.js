import React, { Component } from 'react';
import mailbox from '../mailbox.png';

class FormConfirmation extends Component {
    
   
    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }
    render() {
        const { email , confirm } = this.props;
        return (
            <div>
                <h3 className="title">You're all set. Ready?</h3>
                <section>
                <img src={mailbox} alt="..."/>
                    <p style={{ color: "red" }}>We will send a message for this e-mail</p>
                    <p>{email}</p>
                </section>
                <div style={{"text-align": "right"}}>
                <button className="back" onClick={this.back}>Back</button>
                <button className="next" onClick={confirm}>Confirm</button>
                </div>
            </div>
        )
    }
}
export default FormConfirmation;