import React, { useState } from 'react';
import firebase from '../../config/firebase'

export const Register = () => {
    const [fullname, setFullname]   = useState('');
    const [email, setEmail]   = useState('');
    const [password, setPassword]   = useState('');

    const onSubmit = () => {
        const data = {
            fullname: fullname,
            email: email
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;
            firebase.database()
            .ref('users/' + userId)
            .set(data)
            .then(res => console.log('Good'));
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    return (
        <div className="container mt-5">
            <p>Fullname</p>
            <input
                className="form form-control"
                placeholder="Fullname"
                value={fullname}
                onChange={ (e) => setFullname(e.target.value) }
            />

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
    )
}