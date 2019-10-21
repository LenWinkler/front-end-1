import React, { useState } from 'react';
import axiosWithAuth from '../Auth/AxiosWithAuth';

const SignUp = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const userHandler = e => {
        setUser(e.target.value)
    };

    const passHandler = e => {
        
    }

}

export default SignUp;