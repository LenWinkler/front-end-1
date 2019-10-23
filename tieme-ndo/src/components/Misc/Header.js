import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    color: #FEFEFE;
    background-color: #333333;
    font-family: 'Work Sans', sans-serif;
    margin: 0 auto;
    padding: 20px 0;
    width: 90%;
    border-radius: 10px;
`;

const Header = props => {
    return (
        <div>
            <StyledHeader>Tieme Ndo | {props.title}</StyledHeader>
        </div>
    )
}

export default Header;

// FONT COLOR --- color: #363636;
// CallToAction ---     color: #46D1A3;
// SECTION ---   background-color: #fff;
// ALT SECTION 1 ---    background-color: #4e4e4e;
// ALT SECTION 2 ---  rgba(17, 17, 17, .3)
// FOOTER TOP --- background: #232328;
// FOOTER BOTTOM ---     background: #1D1D21;