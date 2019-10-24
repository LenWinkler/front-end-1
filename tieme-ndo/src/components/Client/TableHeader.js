import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    position: sticky;
    top: 0;
`;

const StyledA = styled.p`
    font-weight: bold;
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 16%;
`;

const StyledB = styled.p`
    font-weight: bold;    
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 9%;
`;

const StyledC = styled.p`
    font-weight: bold;    
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 5%;
`;

const TableHeader = () => {
    return (
        <StyledDiv>
            <StyledA>Client</StyledA>
            <StyledA>Village</StyledA>
            <StyledB>Loan Start</StyledB>
            <StyledB>Loan Due</StyledB>
            <StyledB>Amount</StyledB>
            <StyledB>Paid</StyledB>
            <StyledB>Balance</StyledB>
            <StyledB>Bags To Sell</StyledB>
            <StyledB>Bags To Keep</StyledB>
            <StyledC></StyledC>
        </StyledDiv>
    )
}

export default TableHeader;