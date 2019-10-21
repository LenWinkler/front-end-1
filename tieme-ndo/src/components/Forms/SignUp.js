import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import styled from 'styled-components';

const PassMatch = styled.p`
    color: green;
`

const NoPassMatch = styled.p`
    color: red;
`

const SignUp = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    };

    const passHandler = e => {
        setPass(e.target.value)
    };

    const confirmHandler = e => {
        setConfirmPass(e.target.value)
    };

    const emailHandler = e => {
        setEmail(e.target.value)
    };

    const register = e => {
        if (pass === confirmPass) {
        e.preventDefault();

        axiosWithAuth()
        .post('/api/register')
        .then(res => console.log(res))
        .catch(err => console.log(err))
        } else {
            e.preventDefault();
            alert('Error! Passwords do not match!')
        }
    }

    const passConfirm = () => {
        return pass === '' && confirmPass === '' || confirmPass.length === 0 ? ''
        : pass === confirmPass ? <PassMatch>Passwords match!</PassMatch>
        : <NoPassMatch>Passwords must match!</NoPassMatch>;
    }

    return (
        <div>
            <form onSubmit={register}>
                <input type="text" value={user} onChange={userHandler} placeholder="Username" />
                <input type="password" value={pass} onChange={passHandler} placeholder="Password" />
                <input type="password" value={confirmPass} onChange={confirmHandler} placeholder="Confirm Password" />
                {passConfirm()}
                <input type="email" value={email} onChange={emailHandler} placeholder="Email Address" />
                <button>Register</button>
            </form>
        </div>
    )

}

export default SignUp;