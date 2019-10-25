import React from 'react';
import logo from '../../img/cropped-tiem_logo-3.jpg';
import styled from 'styled-components';

const StyledHeader = styled.div`
    display: grid;
    grid-template-columns: 200px auto 200px;
    color: #FEFEFE;
    background-color: #333333;
    font-family: 'Work Sans', sans-serif;
    margin: 0 auto;
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
`

const StyledLogo = styled.img`
    object-fit: contain;
    padding: 5px 15px;
    border: 3px solid #73A85A;
    border-radius: 50px;
    background-color: white;
    margin: 0 auto;
`

const StyledTitle = styled.h1`
    font-size: 50px;
    margin: 0;
    padding: 0;
    // width: 500px;
`

const Header = props => {
    return (
        <StyledHeader>
            <StyledLogo src={logo} alt='tieme ndo logo' />
            <StyledTitle>{props.title}</StyledTitle>
        </StyledHeader>
    )
}

export default Header;