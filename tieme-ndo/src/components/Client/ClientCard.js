import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledTable = styled.table`
  width: 100%
`;

const StyledTableDataA = styled.td`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 16%;
  border: 1px solid black;
`;

const StyledTableDataB = styled.td`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 9%;
  border: 1px solid black;
`;

const StyledTableDataC = styled.td`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 5%;
  border: 1px solid black;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 2px 8px;
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
    <StyledDiv>
      <StyledTable>
        <tbody>
          <tr>
            <StyledTableDataA>{props.client.name}</StyledTableDataA>
            <StyledTableDataA>{props.client.village}</StyledTableDataA>
            <StyledTableDataB>{props.client.loanInitialDate}</StyledTableDataB>
            <StyledTableDataB>{props.client.loanDueDate}</StyledTableDataB>
            <StyledTableDataB>{props.client.loanAmount}</StyledTableDataB>
            <StyledTableDataB>{props.client.paidAmount}</StyledTableDataB>
            <StyledTableDataB>{props.client.dueAmount}</StyledTableDataB>
            <StyledTableDataB>{props.client.goalBag}</StyledTableDataB>
            <StyledTableDataB>{props.client.achievedBag}</StyledTableDataB>
            <StyledTableDataC><StyledLink to={`/update-client/${props.client.id}`}>edit</StyledLink></StyledTableDataC>
          </tr>
        </tbody>
      </StyledTable>  
    </StyledDiv>
  )
}

export default ClientCard;