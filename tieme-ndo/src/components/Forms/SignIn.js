import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import Header from '../Misc/Header';

const SignIn = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    };

    const passHandler = e => {
        setPass(e.target.value)
    };

    const login = e => {
        e.preventDefault();

        const credentials = {
            username: user,
            password: pass
        }

        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push('/client-list')
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <Header title={`Welcome`} />
            <form onSubmit={login}>
                <input type="text" value={user} onChange={userHandler} placeholder="Username" />
                <input type="password" value ={pass} onChange={passHandler} placeholder="Password" />
                <button>Sign In</button>
                <button onClick={() => {props.history.push('/sign-up')}}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignIn;