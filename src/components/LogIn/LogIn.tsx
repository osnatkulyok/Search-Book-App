import React, { useState } from 'react';

// Define the interface for the Login component props
interface LoginProps {
    onLogin: (username: string) => void; // a function that takes a string as an argument and returns nothing
}

// Define the Login component as a function component that takes in LoginProps
const Login: React.FC<LoginProps> = ({ onLogin }) => {
    // Define state for the username input
    const [username, setUsername] = useState('');

    // Define the function that handles the submission of the form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Check if the username is not empty
        if (username.trim() !== '') {
            // Call the onLogin function with the entered username as the argument
            onLogin(username);
        }
    };

    // Define the function that handles changes to the username input
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Update the state with the new value of the input
        setUsername(event.target.value);
    };

    // Render the login form
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

// Export the Login component as the default export of this module
export default Login;
