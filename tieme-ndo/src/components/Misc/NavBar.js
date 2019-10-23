import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/cropped-tiem_logo-3.jpg';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLogo = styled.img`
    object-fit: contain;
`;

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    // width: 20%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #363636;
    padding: 15px;
    font-family: 'Work Sans', sans-serif;
`;

const HeaderNav = () => {
    return (
        <div>
        <StyledDiv>
            <StyledLogo src={logo} alt='tiem logo' />
            <StyledNav>
                <StyledLink to={`/client-list`}>Clients</StyledLink>
                <p>|</p>
                <StyledLink to={`/staff-list`}>Staff</StyledLink>
            </StyledNav>
        </StyledDiv>
        </div>
    )
}

export default HeaderNav;