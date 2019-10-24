import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import Header from '../Misc/Header';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
`
const UserInput = styled.input`
    height: 2rem;
    width: 16rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    border: 1px solid #4e4e4e;
`
const PassInput = styled.input`
    height: 2rem;
    width: 16rem;
    margin: 1rem 0;
    font-size: 1rem;
    border: 1px solid #4e4e4e;
`

const Button = styled.button`
    width: 10rem;
    height: 1.7rem;
    margin: 1rem 0;
    border-radius: 5px;
    background: #73A85A;
    color: white;
    font-size: 1rem;
    font-weight: bold;

    :hover {
        background: white;
        color: #73A85A;
        border: 1px solid #73A85A;
    }
`


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
            <StyledForm onSubmit={login}>
                <UserInput type="text" value={user} onChange={userHandler} placeholder="Username" />
                <PassInput type="password" value ={pass} onChange={passHandler} placeholder="Password" />
                <Button>Sign In</Button>
                <Button onClick={() => {props.history.push('/sign-up')}}>Sign Up</Button>
            </StyledForm>
        </div>
    )
}

export default SignIn;