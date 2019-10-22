import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 90%
`;

const StyledTableHeader = styled.th`
    color: #FEFEFE;
    background-color: #333333;
    padding: 5px 5px;
    margin: 0 auto;
    width: 10%;
`;

const TableHeader = () => {
    return (
        <StyledDiv>
            <StyledTable>
                <thead>
                <tr>
                    <StyledTableHeader>Client</StyledTableHeader>
                    <StyledTableHeader>Village</StyledTableHeader>
                    <StyledTableHeader>Loan Start Date</StyledTableHeader>
                    <StyledTableHeader>Loan Due Date</StyledTableHeader>
                    <StyledTableHeader>Loan Amount</StyledTableHeader>
                    <StyledTableHeader>Paid Amount</StyledTableHeader>
                    <StyledTableHeader>Balance</StyledTableHeader>
                    <StyledTableHeader>Bags To Sell</StyledTableHeader>
                    <StyledTableHeader>Bags To Keep</StyledTableHeader>
                    <StyledTableHeader>Edit Client</StyledTableHeader>
                </tr>
                </thead>
            </StyledTable>
        </StyledDiv>
    )
}

export default TableHeader;