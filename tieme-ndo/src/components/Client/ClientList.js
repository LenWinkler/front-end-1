import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import Header from '../Misc/Header';
import logo from '../../img/cropped-tiem_logo-3.jpg';
import NavBar from '../Misc/NavBar';
import ClientSearch from './ClientSearch';
import PercentPaid from '../Misc/PercentPaid';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledLogo = styled.img`
    object-fit: contain;
    padding: 5px 15px;
    border: 3px solid #73A85A;
    border-radius: 50px;
`;

const ClientList = props => {
  console.log('client list props', props)
  useEffect(() => {
    props.fetchData();
  }, [])

	return (
    <div>
      <Header title={`Client List`} />
      <StyledDiv>
        <StyledLogo src={logo} alt='tieme ndo logo' />
        <NavBar />
        <PercentPaid />
      </StyledDiv>
      <ClientSearch clients={props.clients}/>
    </div>
	)
}

const mapStateToProps = state => {
  return {
    clients: state.farmers
  }
}

export default connect(mapStateToProps, { fetchData })(ClientList);