import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    // width: 20%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333333;
    background-color: #73A85A;
    font-weight: bold;
    font-family: 'Work Sans', sans-serif;
    border: transparent;
    border-radius: 5px;
    width: 100px;
    margin: 15px;
    padding: 15px;

    :hover {
        color: #73A85A;
        background-color: #333333; 
    }
`;

const HeaderNav = () => {
    return (
        <div>
            <StyledNav>
                <StyledLink to={`/client-list`}>Clients</StyledLink>
                <StyledLink to={`/staff-list`}>Staff</StyledLink>
            </StyledNav>
        </div>
    )
}

export default HeaderNav;