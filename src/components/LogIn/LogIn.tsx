import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { readUserCredentialsFromFile, writeUserCredentialsToFile } from './fileUtils';

function Login(props: { onLogin: (username: string) => void }): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (): void => {
        if (typeof username !== 'string' || typeof parseInt(password) !== 'number') {
            alert('Invalid username or password!');
        } else {
            const userCredentials = readUserCredentialsFromFile('userCredentials.json');
            const isCredentialsValid = checkCredentials(userCredentials, username, password);
            if (isCredentialsValid) {
                // Call the onLogin function passed in as a prop if successful
                props.onLogin(username);
            } else {
                alert('Invalid username or password!');
            }
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <div className="login-body">
                <h2>Welcome to BookHub</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
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

function checkCredentials(
    userCredentials: Record<string, number>,
    username: string,
    password: string
): boolean {
    if (userCredentials[username] === parseInt(password)) {
        return true;
    } else {
        return false;
    }
}

// Create the userCredentials file if it doesn't exist already
writeUserCredentialsToFile('userCredentials.json', {});

export default Login;
