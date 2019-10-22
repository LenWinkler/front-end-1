import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 10px;
`;

const StyledName = styled.h2`
  color: #24325FFF;
  display: flex;
  justify-content: center;
`;

const StyledPic = styled.img`
  margin: 0 auto;
  border: 10px solid #E89242FF;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const ClientCard = props => {
	return (
		<StyledCard className="card">
      <StyledName>{props.client.name}</StyledName>
			{/* <StyledPic src={props.client.image} alt="rick and morty character" /> */}
		</StyledCard>
	)
}

export default ClientCard;