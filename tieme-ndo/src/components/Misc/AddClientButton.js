import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AddClientButton = (props) => {
    const StyledLink = styled(Link)`
        text-decoration: none;
        border: 1px solid #333333;
        border-radius: 5px;
        padding: 10px 15px;
        color: #333333;
        background-color: #73A85A;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        width: 75px;
        visibility: ${props.visibility};

        :hover {
            color: #73A85A;
            background-color: #333333;
        }
    `;
      
    return (
        <div>
            <StyledLink to='/add-client'>Add New Client</StyledLink>
        </div>
    )
}

export default AddClientButton;