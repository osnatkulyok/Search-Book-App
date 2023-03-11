
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'src/components/Navbar/Navbar';
import LogIn from 'src/components/LogIn/LogIn';
import { Header } from 'src/components/Header/Header';

function Home(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username: string) => {
        setUsername(username);
        setIsLoggedIn(true);
    };

    return (
        <main>
            <Navbar isLoggedIn={isLoggedIn} user={username} />
            {isLoggedIn ? <Header /> : <LogIn onLogin={handleLogin} />}
            {isLoggedIn && <Outlet />}
        </main>
    );
}

export default Home;
