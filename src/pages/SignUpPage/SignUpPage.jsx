import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './SignUpPage.module.css';

class SignUpPage extends Component {
    state = {
        message: ''
    }
    
    updateMessage = (msg) => {
        this.setState({message: msg});
    }

    render() {
        return(
            <div className={styles.SignUpPage}>
                <div className={styles.SignUpPageLayer}>
                    <SignUpForm {...this.props} updateMessage={this.updateMessage} />
                    <p>{this.state.message}</p>
                </div>
            </div>
        );
    }
}

export default SignUpPage;