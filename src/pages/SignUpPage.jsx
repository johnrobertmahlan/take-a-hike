import React, { Component } from 'react';
import SignUpForm from '../components/SignUpForm/SignUpForm';

class SignUpPage extends Component {
    state = {
        message: ''
    }
    
    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    render() {
        return(
            <div className='SignUpPage'>
                <SignUpForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
            </div>
        );
    }
}

export default SignUpPage;