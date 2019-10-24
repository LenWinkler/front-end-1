import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    border: 1px solid #73A85A;
    border-radius: 5px;
    padding: 15px 20px;
    color: white;
    background-color: #73A85A;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    width: 120px;
    margin-right: 40px;

    :hover {
        color: #73A85A;
        background-color: white;
    }
`

const AddClientButton = (props) => {
    const StyledDiv = styled.div`
        visibility: ${props.visibility};
    `
      
    return (
        <StyledDiv>
            <StyledLink to='/add-client'>Add New Client</StyledLink>
        </StyledDiv>
    )
}

export default AddClientButton;