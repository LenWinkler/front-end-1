import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 90%
`;

const StyledTableDataA = styled.td`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 18%;
  border: 1px solid black;
`;

const StyledTableDataB = styled.td`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 8%;
  border: 1px solid black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 2px 15px;
  color: #333333;
  background-color: #73A85A;
  font-family: 'Lato', sans-serif;

  :hover {
    color: #73A85A;
    background-color: #333333;
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
            <StyledTableDataA>{client.name}</StyledTableDataA>
            <StyledTableDataA>{client.village}</StyledTableDataA>
            <StyledTableDataB>{client.loanInitialDate}</StyledTableDataB>
            <StyledTableDataB>{client.loanDueDate}</StyledTableDataB>
            <StyledTableDataB>${client.loanAmount}</StyledTableDataB>
            <StyledTableDataB>${client.paidAmount}</StyledTableDataB>
            <StyledTableDataB>${client.dueAmount}</StyledTableDataB>
            <StyledTableDataB>{client.goalBag}</StyledTableDataB>
            <StyledTableDataB>{client.achievedBag}</StyledTableDataB>
            <StyledTableDataB><StyledLink to={`/update-client/${client.id}`}>edit</StyledLink></StyledTableDataB>
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