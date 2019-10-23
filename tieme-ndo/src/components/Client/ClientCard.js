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

const StyledTableData = styled.td`
  color: #333333;
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

  :hover {
    color: black;
    background-color: white;
  }
`;

const ClientCard = props => {
  console.log('card props', props)
	return (
		<StyledDiv>
      <StyledTable>
        <tbody>
        <tr>
          <StyledTableData>{props.client.name}</StyledTableData>
          <StyledTableData>{props.client.village}</StyledTableData>
          <StyledTableData>{props.client.loanInitialDate}</StyledTableData>
          <StyledTableData>{props.client.loanDueDate}</StyledTableData>
          <StyledTableData>${props.client.loanAmount}</StyledTableData>
          <StyledTableData>${props.client.paidAmount}</StyledTableData>
          <StyledTableData>${props.client.dueAmount}</StyledTableData>
          <StyledTableData>{props.client.goalBag}</StyledTableData>
          <StyledTableData>{props.client.achievedBag}</StyledTableData>
          <StyledTableData><Link to={`/update-client/${props.client.id}`}>edit</Link></StyledTableData>
        </tr>
        </tbody>
      </StyledTable>
      
		</StyledDiv>
	)
}

export default ClientCard;