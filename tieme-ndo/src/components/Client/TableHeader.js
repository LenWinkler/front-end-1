import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 90%
`;

const StyledTableHeaderA = styled.th`
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 18%;
`;

const StyledTableHeaderB = styled.th`
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 8%;
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
                    <StyledTableHeaderB>Loan Amount</StyledTableHeaderB>
                    <StyledTableHeaderB>Paid Amount</StyledTableHeaderB>
                    <StyledTableHeaderB>Balance</StyledTableHeaderB>
                    <StyledTableHeaderB>Bags To Sell</StyledTableHeaderB>
                    <StyledTableHeaderB>Bags To Keep</StyledTableHeaderB>
                    <StyledTableHeaderB>Update</StyledTableHeaderB>
                </tr>
                </thead>
            </StyledTable>
        </StyledDiv>
    )
}

export default TableHeader;