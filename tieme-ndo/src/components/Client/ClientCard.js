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
  padding: 5px 5px;
  margin: 0 auto;
  width: 10%;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  width: 80px;
  border-radius: 10px;
`;

const ClientCard = props => {
	return (
		<StyledDiv>
      <StyledTable>
        <tbody>
        <tr>
          <StyledTableData>{props.client.name}</StyledTableData>
          <StyledTableData>{props.client.village}</StyledTableData>
          <StyledTableData>{props.client.loanInitialDate}</StyledTableData>
          <StyledTableData>{props.client.loanDueDate}</StyledTableData>
          <StyledTableData>{props.client.loanAmount}</StyledTableData>
          <StyledTableData>{props.client.paidAmount}</StyledTableData>
          <StyledTableData>{props.client.dueAmount}</StyledTableData>
          <StyledTableData>{props.client.goalBag}</StyledTableData>
          <StyledTableData>{props.client.achievedBag}</StyledTableData>
          <StyledTableData><StyledButton>edit</StyledButton></StyledTableData>
        </tr>
        </tbody>
      </StyledTable>
      
		</StyledDiv>
	)
}

export default ClientCard;