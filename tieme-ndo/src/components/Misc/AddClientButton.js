import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 10px 15px;
    color: #333333;
    background-color: #73A85A;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    width: 120px;
    margin: 0;

    :hover {
        color: #73A85A;
        background-color: #333333;
    }
`;

const AddClientButton = (props) => {
    const StyledDiv = styled.div`
        visibility: ${props.visibility};
    `;
      
    return (
        <StyledDiv>
            <StyledLink to='/add-client'>Add New Client</StyledLink>
        </StyledDiv>
    )
}

export default AddClientButton;