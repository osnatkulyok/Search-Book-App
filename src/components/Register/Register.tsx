import React, { useState } from 'react';

interface RegisterProps {
    setUser: React.Dispatch<React.SetStateAction<{ username: string; password: string } | null>>;
}

function Register({ setUser }: RegisterProps): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!username || !password) {
            setError('Please enter a username and password');
        } else if (!/^[a-zA-Z]+$/.test(username)) {
            setError('Username must contain letters only');
        } else if (!/^[0-9]+$/.test(password)) {
            setError('Password must contain numbers only');
        } else {
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                {error && <p>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
