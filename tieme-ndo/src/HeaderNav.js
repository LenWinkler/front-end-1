import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/cropped-tiem_logo-3.jpg';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledLogo = styled.img`
    object-fit: contain;
`;

const StyledHeader = styled.h1`
    color: #FEFEFE;
    background-color: #333333;
    font-family: 'Work Sans', sans-serif;
    margin: 0 auto;
    padding: 20px;
    // width: 60%;
    border-radius: 10px;
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
            <StyledHeader>CLIENT TRACKER</StyledHeader>
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

// FONT COLOR --- color: #363636;
// CallToAction ---     color: #46D1A3;
// SECTION ---   background-color: #fff;
// ALT SECTION 1 ---    background-color: #4e4e4e;
// ALT SECTION 2 ---  rgba(17, 17, 17, .3)
// FOOTER TOP --- background: #232328;
// FOOTER BOTTOM ---     background: #1D1D21;