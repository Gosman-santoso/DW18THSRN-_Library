import React from 'react';

import './login.css';

function Login(){
    return(
        <div className="container">
            <div className="sign-in">
                <h1>Sign In</h1>
                <input type="text" name="id" id="id" placeholder="Email"/>
                <input type="text" name="password" id="password" placeholder="Password"/>
                <button>Sign in</button>
                <p>Don't have an account ? Klik <a href=""><strong>Here</strong></a> </p>
            </div>
        </div>
    );
}

export default Login;
