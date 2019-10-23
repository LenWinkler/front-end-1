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
  width: 220px;
  margin: 10px;
  border: 1px solid #95BBDF;
  border-radius: 10px;
`;

const StyledName = styled.p`
  margin: 2px auto;
  color: #FEFEFE;
  font-family: 'Lato', sans-serif;
`;

const StyledEmail = styled.p`
  margin: 2xp auto;
  color: #FEFEFE;
  font-family: 'Lato', sans-serif;
`;

const ClientCard = props => {
	return (
        <StyledCard>
          <StyledAvatar src={avatar} alt='blank avatar placeholder'/>
          <StyledName>USERNAME: {props.member.username}</StyledName>
          <StyledEmail>EMAIL: {props.member.email}</StyledEmail>
        </StyledCard>
	)
}

export default ClientCard;