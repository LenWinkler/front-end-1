import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 90%;
  height: 200px;
  margin-bottom: 200px;
`;

const StyledTable = styled.table`
    // position: fixed;    
    // width: 90%
`;

const StyledTableHead = styled.thead`
    // position: fixed;
    // width: 90%;
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
    border: 1px solid black;
`;

const TableHeader = () => {
    return (
        <StyledDiv>
            <StyledTable>
                <StyledTableHead>
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
                </StyledTableHead>
            </StyledTable>
        </StyledDiv>
    )
}

export default TableHeader;