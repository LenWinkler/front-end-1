import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';
import styled from 'styled-components';
import Header from '../Misc/Header'

const PassMatch = styled.p`
    color: green;
`

const NoPassMatch = styled.p`
    color: red;
`
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

const OtherInput = styled.input`
    height: 2rem;
    width: 16rem;
    margin: 1rem 0;
    font-size: 1rem;
    border: 1px solid #4e4e4e;
`

const Button = styled.button`
    width: 12rem;
    height: 3rem;
    margin: 2rem 0;
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

const SignUp = props => {
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
        const newUser = {
            username: user,
            password: pass,
            email: email
        }

        if (pass === confirmPass) {
        e.preventDefault();

        axiosWithAuth()
        .post('/api/register', newUser)
        .then(res => {
            alert(`Succesfully created user "${res.data.info.username}"!`)
            props.history.push('/')
    })
        .catch(err => console.log(err))
        setUser('');
        setPass('');
        setConfirmPass('');
        setEmail('');
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

    const passLength = () => {
        return pass.length === 0 || pass.length > 3 ? ''
        : <NoPassMatch>Password must be at least 4 characters!</NoPassMatch>
    }

    return (
        <>
        <Header title={`Register New User`} />
        <div>
            <StyledForm onSubmit={register}>
                <UserInput type="text" name="user" value={user} onChange={userHandler} placeholder="Username" />
                <OtherInput type="password" name="password" value={pass} onChange={passHandler} placeholder="Password" />
                {passLength()}
                <OtherInput type="password" name="confirm password" value={confirmPass} onChange={confirmHandler} placeholder="Confirm Password" />
                {passConfirm()}
                <OtherInput type="email" name="email" value={email} onChange={emailHandler} placeholder="Email Address" />
                <Button>Register</Button>
            </StyledForm>
        </div>
        </>
    )

}

export default SignUp;