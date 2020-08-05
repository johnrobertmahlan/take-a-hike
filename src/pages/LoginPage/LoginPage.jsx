import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import styles from './LoginPage.module.css';

class LoginPage extends Component {
    state = {
        email: '',
        pw: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if(!this.state.email || !this.state.pw) {
            alert('You must enter both an email and a password!');
        }
        try {
            await userService.login(this.state);
            this.props.handleSignUpOrLogIn();
            this.props.history.push('/');
        } catch (err) {
            alert('Invalid Credentials!');
        }
    };

    render() {
        return(
            <div className={styles.LoginPage}>
                <div className={styles.LoginPageLayer}>
                    <header className="header-footer">Log In</header>
                    <form className={styles.formHorizontal} onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12 text-center">
                                    <button className={styles.button}>Log In</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link className={styles.button} to='/'>Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;