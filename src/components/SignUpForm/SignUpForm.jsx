import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import styles from './SignUpForm.module.css';

class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignUpOrLogIn();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return(
            <div>
                <header className="header-footer">Sign Up</header>
                <form className={styles.formHorizontal} onSubmit={this.handleSubmit} >
                    <div className={styles.formGroup}>
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                     </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className={styles.button} disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                            <Link className={styles.button} to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;