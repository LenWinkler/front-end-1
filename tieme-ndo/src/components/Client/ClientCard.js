import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 90%
`;

const StyledTableData = styled.td`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 10%;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  width: 70px;
  border: 1px solid #333333;
  border-radius: 5px;
  color: #FEFEFE;
  background-color: #333333;
  font-family: 'Lato', sans-serif;

  :hover {
    color: black;
    background-color: white;
  }
`;

const ClientCard = (props) => {
  return (
    <div className="list">
    {props.filteredClient.map(client => {
      return (
        <StyledDiv>
        <StyledTable>
          <tbody>
          <tr>
            <StyledTableData>{client.name}</StyledTableData>
            <StyledTableData>{client.village}</StyledTableData>
            <StyledTableData>{client.loanInitialDate}</StyledTableData>
            <StyledTableData>{client.loanDueDate}</StyledTableData>
            <StyledTableData>${client.loanAmount}</StyledTableData>
            <StyledTableData>${client.paidAmount}</StyledTableData>
            <StyledTableData>${client.dueAmount}</StyledTableData>
            <StyledTableData>{client.goalBag}</StyledTableData>
            <StyledTableData>{client.achievedBag}</StyledTableData>
            <StyledTableData><StyledButton>update</StyledButton></StyledTableData>
          </tr>
          </tbody>
        </StyledTable>
        
      </StyledDiv>
      )
    })}
  </div>
  )
}

export default ClientCard;