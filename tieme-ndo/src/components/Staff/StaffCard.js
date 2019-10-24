import React from 'react';
import avatar from '../../img/avatar-placeholder.png';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #333333;
`;

const StyledAvatar = styled.img`
  width: 225px;
  margin: 10px;
  border: transparent;
  border-radius: 10px;
`;

const StyledParagraph = styled.p`
  color: #FEFEFE;
  font-family: 'Lato', sans-serif;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const ClientCard = props => {
	return (
        <StyledCard>
          <StyledAvatar src={avatar} alt='blank avatar placeholder'/>
          <StyledParagraph>USERNAME: {props.member.username}</StyledParagraph>
          <StyledParagraph>EMAIL: {props.member.email}</StyledParagraph>
        </StyledCard>
	)
}

export default ClientCard;