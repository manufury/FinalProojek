import React, { useState } from 'react';
import firebase from '../../config/firebase'
import { Redirect } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail]   = useState('');
    const [password, setPassword]   = useState('');
    const [logedin, setLogedin] = useState(false);

    const onSubmit = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            setLogedin(true);
        })
        .catch((error) => {
            console.log(error.message);
            setLogedin(false);
        });
    }

    if(logedin)
    {
        return <Redirect to="/dashboard" />
    }

    return (
        <React.Fragment>
            <div className="container mt-5">
                <h2 style={{textAlign: "center"}}>Login Page</h2>
                <p className="mt-5">Email</p>
                <input
                    className="form form-control"
                    placeholder="Email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <p className="mt-5">Password</p>
                <input
                    className="form form-control"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                />

                <button type="button" onClick={onSubmit} className="btn btn-primary mt-3">
                    Submit
                </button>
            </div>
        </React.Fragment>
    )
}