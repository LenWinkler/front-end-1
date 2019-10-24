import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
`;

const StyledTable = styled.table`    
    width: 100%
`;

const StyledTableHeaderA = styled.th`
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 16%;
`;

const StyledTableHeaderB = styled.th`
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 9%;
`;

const StyledTableHeaderC = styled.th`
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 5%;
`;

const TableHeader = () => {
    return (
        <StyledDiv>
            <StyledTable>
                <thead>
                <tr>
                    <StyledTableHeaderA>Client</StyledTableHeaderA>
                    <StyledTableHeaderA>Village</StyledTableHeaderA>
                    <StyledTableHeaderB>Loan Start</StyledTableHeaderB>
                    <StyledTableHeaderB>Loan Due</StyledTableHeaderB>
                    <StyledTableHeaderB>Loan Amount<br></br>GH₵</StyledTableHeaderB>
                    <StyledTableHeaderB>Paid Amount<br></br>GH₵</StyledTableHeaderB>
                    <StyledTableHeaderB>Balance<br></br>GH₵</StyledTableHeaderB>
                    <StyledTableHeaderB>Bags To Sell</StyledTableHeaderB>
                    <StyledTableHeaderB>Bags To Keep</StyledTableHeaderB>
                    <StyledTableHeaderC></StyledTableHeaderC>
                </tr>
                </thead>
            </StyledTable>
        </StyledDiv>
    )
}

export default TableHeader;