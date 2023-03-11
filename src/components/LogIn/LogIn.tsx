// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login(props: { onLogin: (username: string) => void }): JSX.Element {
//     // Using the state hook to keep track of the user input values
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     // Function to handle the user sign-in
//     const handleSignIn = (): void => {
//         if (typeof username !== 'string' || typeof parseInt(password) !== 'number') {
//             alert('Invalid username or password!');
//         } else {
//             // TODO: Perform actual sign-in logic here
//             // Call the onLogin function passed in as a prop
//             props.onLogin(username);
//         }
//     };

//     return (
//         <div className="login-container">
//             <div className="login-body">
//                 <h2>Welcome to BookHub</h2>
//                 <div className="form-group">
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="form-control"
//                     />
//                 </div>
//                 <button type="button" className="btn btn-primary" onClick={handleSignIn}>
//                     Sign In
//                 </button>
//                 <div className="register-link">
//                     <p>
//                         Not a member yet?{' '}
//                         <Link to="register" target={'_blank'}>
//                             Register
//                         </Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props: { onLogin: (username: string) => void }): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (): void => {
        if (typeof username !== 'string' || typeof parseInt(password) !== 'number') {
            alert('Invalid username or password!');
        } else {
            // TODO: Check if the user exists and if the password is correct
            // Call the onLogin function passed in as a prop if successful
            props.onLogin(username);
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

export default Login;

// function writeUserCredentialsToFile(
//     userCredentials: Record<string, number>,
//     userCredentialsFilePath: string
//   ): void {
//     try {
//       const data = JSON.stringify(userCredentials);
//       Deno.writeTextFileSync(userCredentialsFilePath, data);
//       console.log(`User credentials written to file: ${userCredentialsFilePath}`);
//     } catch (error) {
//       console.error(`Could not write user credentials to file: ${error.message}`);
//     }
//   }
