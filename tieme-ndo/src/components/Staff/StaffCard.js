import React from 'react';
import avatar from '../../img/avatar-placeholder.png';
import styled from 'styled-components';

const ClientCard = props => {
	return (
        <div>
            <img src={avatar} alt='blank avatar placeholder'/>
          <h3>{props.member.username}</h3>
          <p>{props.member.email}</p>
        </div>
	)
}

export default ClientCard;