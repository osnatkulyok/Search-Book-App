import React from 'react';

// Define the Welcome component with a username prop
interface WelcomeProps {
    username: string;
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => {
    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>You have successfully logged in.</p>
        </div>
    );
};

export default Welcome;
