import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

const StyledA = styled.p`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 16%;
  border: 1px solid black;
`

const StyledB = styled.p`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 9%;
  border: 1px solid black;
`

const StyledC = styled.p`
  color: #333333;
  font-family: 'Lato', sans-serif;
  padding: 5px 5px;
  margin: 0 auto;
  width: 5%;
  border: 1px solid black;
`

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
`

const ClientCard = (props) => {
  return (
    <StyledDiv>
      <StyledA>{props.client.name}</StyledA>
      <StyledA>{props.client.village}</StyledA>
      <StyledB>{props.client.loanInitialDate}</StyledB>
      <StyledB>{props.client.loanDueDate}</StyledB>
      <StyledB>{props.client.loanAmount}</StyledB>
      <StyledB>{props.client.paidAmount}</StyledB>
      <StyledB>{props.client.dueAmount}</StyledB>
      <StyledB>{props.client.goalBag}</StyledB>
      <StyledB>{props.client.achievedBag}</StyledB>
      <StyledC><StyledLink to={`/update-client/${props.client.id}`}>edit</StyledLink></StyledC> 
    </StyledDiv>
  )
}

export default ClientCard;