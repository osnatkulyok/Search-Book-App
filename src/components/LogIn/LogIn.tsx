// import React, { useState } from 'react';

// // Define the interface for the Login component props
// interface LoginProps {
//     onLogin: (username: string) => void; // a function that takes a string as an argument and returns nothing
// }

// // Define the Login component as a function component that takes in LoginProps
// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//     // Define state for the username input
//     const [username, setUsername] = useState('');

//     // Define the function that handles the submission of the form
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         // Check if the username is not empty
//         if (username.trim() !== '') {
//             // Call the onLogin function with the entered username as the argument
//             onLogin(username);
//         }
//     };

//     // Define the function that handles changes to the username input
//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         // Update the state with the new value of the input
//         setUsername(event.target.value);
//     };

//     // Render the login form
//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username:</label>
//             <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={handleUsernameChange}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// // Export the Login component as the default export of this module
// export default Login;
// //////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const LogIn = () => {
//     // State to hold the username and password entered by the user
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     // State to hold any validation errors
//     const [error, setError] = useState('');

//     // State to hold the logged-in user's information
//     const [user, setUser] = useState({ username: '' });

//     // Navigate hook to redirect the user
//     const navigate = useNavigate();

//     // Effect to retrieve the user's information from localStorage when the component mounts
//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     // Function to handle form submission
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (!username || !password) {
//             setError('Please enter a username and password');
//         } else if (username !== 'firstuser' || password !== 'password') {
//             setError('Incorrect username or password');
//         } else {
//             // Save the user's information in localStorage
//             const user = { username };
//             localStorage.setItem('user', JSON.stringify(user));
//             setUser(user);

//             // Redirect the user to the Home component
//             navigate('/home');
//         }
//     };

//     // Function to handle username input changes
//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value);
//     };

//     // Function to handle password input changes
//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     return (
//         <div>
//             <h1>Welcome to the app!</h1>
//             {user.username ? (
//                 <p>Welcome back, {user.username}!</p>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Username:
//                         <input type="text" value={username} onChange={handleUsernameChange} />
//                     </label>
//                     <label>
//                         Password:
//                         <input type="password" value={password} onChange={handlePasswordChange} />
//                     </label>
//                     {error && <p>{error}</p>}
//                     <button type="submit">Submit</button>
//                     <Link to="/signup">Sign up</Link>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default LogIn;
////////////////////////////////
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LogIn = () => {
//     const [users, setUsers] = useState([{ username: 'firstuser', password: 'password' }]);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
//         setPassword(event.target.value);
//     };

//     const handleSignIn = () => {
//         const user = users.find((user) => user.username === username && user.password === password);
//         if (user) {
//             navigate('/goodbye');
//         } else {
//             alert('Invalid username or password');
//         }
//     };

//     const handleSignUp = () => {
//         const user = { username, password };
//         setUsers([...users, user]);
//         setUsername('');
//         setPassword('');
//         alert('Successfully signed up!');
//     };

//     const handleRegister = () => {
//         navigate('/register');
//     };

//     return (
//         <div>
//             <h1>Welcome to the app!</h1>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={handleUsernameChange} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//             </label>
//             <button onClick={handleSignIn}>Sign in</button>
//             <button onClick={handleSignUp}>Sign up</button>
//             <button onClick={handleRegister}>Register</button>
//         </div>
//     );
// };

// export default LogIn;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface User {
//     username: string;
//     password: string;
// }

// const Register: React.FC<{ setUsers: React.Dispatch<React.SetStateAction<User[]>> }> = ({ setUsers }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (!username || !password) {
//             setError('Please enter a username and password');
//         } else if (!/^[a-zA-Z]+$/.test(username)) {
//             setError('Username must contain letters only');
//         } else if (!/^[0-9]+$/.test(password)) {
//             setError('Password must contain numbers only');
//         } else {
//             const user = { username, password };
//             setUsers((prevUsers) => [...prevUsers, user]);
//             localStorage.setItem('users', JSON.stringify([...prevUsers, user]));
//             setUsername('');
//             setPassword('');
//             navigate('/');
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input type="text" value={username} onChange={handleUsernameChange} />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" value={password} onChange={handlePasswordChange} />
//                 </label>
//                 {error && <p>{error}</p>}
//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// };

// const LogIn = () => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const [users, setUsers] = useState<User[]>(() => {
//         const storedUsers = localStorage.getItem('users');
//         return storedUsers ? JSON.parse(storedUsers) : [{ username: 'firstuser', password: 'password' }];
//     });
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const handleSignIn = () => {
//         const user = users.find((user) => user.username === username && user.password === password);
//         if (user) {
//             navigate('/goodbye');
//         } else {
//             alert('Invalid username or password');
//         }
//     };

//     const handleSignUp = () => {
//         navigate('/register');
//     };

//     return (
//         <div>
//             <h1>Welcome to the app!</h1>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={handleUsernameChange} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//             </label>
//             <button onClick={handleSignIn}>Sign in</button>
//             <button onClick={handleSignUp}>Sign up</button>
//         </div>
//     );
// };

// export { LogIn, Register };
// ///////////////////////////
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const LogIn = () => {
//     const [users, setUsers] = useState([{ username: 'firstuser', password: 'password' }]);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const handleSignIn = () => {
//         const user = users.find((user) => user.username === username && user.password === password);
//         if (user) {
//             navigate('/goodbye');
//         } else {
//             alert('Invalid username or password');
//         }
//     };

//     const handleSignUp = () => {
//         const user = { username, password };
//         setUsers([...users, user]);
//         setUsername('');
//         setPassword('');
//         alert('Successfully signed up!');
//     };

//     const handleRegister = () => {
//         navigate('/register');
//     };

//     return (
//         <div>
//             <h1>Welcome to the app!</h1>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={handleUsernameChange} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//             </label>

//             <button onClick={handleSignIn}>Sign in</button>
//             <button onClick={handleSignUp}>Sign up</button>
//             {/* <button onClick={handleRegister}>Register</button> */}
//             <Link to="/register">Register</Link><Link to="/register"
//             >Register</Link>
//         </div>
//     );
// };

// export default LogIn;
/////////////////////////
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const LogIn = () => {
//     const [users, setUsers] = useState([{ username: 'firstuser', password: 'password' }]);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUsername(event.target.value);
//     };

//     const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(event.target.value);
//     };

//     const handleSignIn = () => {
//         const user = users.find((user) => user.username === username && user.password === password);
//         if (user) {
//             navigate('/goodbye');
//         } else {
//             alert('Invalid username or password');
//         }
//     };

//     const handleSignUp = () => {
//         const user = { username, password };
//         setUsers([...users, user]);
//         setUsername('');
//         setPassword('');
//         alert('Successfully signed up!');
//     };

//     return (
//         <div>
//             <h1>Welcome to the app!</h1>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={handleUsernameChange} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//             </label>

//             <button onClick={handleSignIn}>Sign in</button>
//             <button onClick={handleSignUp}>Sign up</button>
//             <Link to="/register">Register</Link>
//         </div>
//     );
// };

// export default LogIn;
////////////////////////
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.jpg';

function Login(): JSX.Element {
    // Using the state hook to keep track of the user input values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle the user sign-in
    const handleSignIn = (): void => {
        if (typeof username !== 'string' || typeof parseInt(password) !== 'number') {
            alert('Invalid username or password!');
        } else {
            // TODO: Perform actual sign-in logic here
            alert(`Welcome, ${username}!`);
        }
    };

    return (

        < div className="login-container" >
            <div className="login-header">
                <Link to="/home" target={'_blank'} className="navbar-brand flex">
                    <img src={logo} alt="site logo" />
                    <span className="text-uppercase fw-7 fs-24 ls-1">bookhub</span>
                </Link>
            </div>
            <div className="login-body">
                <h2>Welcome to BookHub</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
        </ div>
    );
}

export default Login;


