import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import monkey from '../../images/monkey.jpg'
import './LogIn.css'

type Props = {
    onLogin: (username: string) => void;
};

function Login(props: Props): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle sign in
    const handleSignIn = (): void => {
        const isValidUsername = typeof username === 'string' && isNaN(Number(username));
        const isValidPassword = /^\d+$/.test(password);

        if (!isValidUsername || !isValidPassword) {
            alert('Invalid username or password! \n keep username string only and password munber only. ');
        } else {
            // TODO: Check if the user exists and if the password is correct
            // Call the onLogin function passed in as a prop if successful
            props.onLogin(username);
        }
    };


    // Function to handle username input changes
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    };

    // Function to handle password input changes
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <h2>Welcome to BookHub</h2>
            <div className="monkey-pic">
                <img src={monkey} alt="monkey-pic" />
            </div>
            <div className="login-body">
                <h3>Get started with a free account </h3>
                <div className="form-group">
                    <label className='label' htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-control"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSignIn}>
                    Sign In
                </button>
                <div className="register-link">
                    <p>
                        Not a member yet?{' '}
                        <Link to="register" target={'_blank'}>
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
