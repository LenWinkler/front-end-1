import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import Header from '../Misc/Header';
import AddClientButton from '../Misc/AddClientButton';
import NavBar from '../Misc/NavBar';
import PercentPaid from '../Misc/PercentPaid';
import ClientSearch from './ClientSearch';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 200px auto 200px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
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
        <AddClientButton visibility={'visible'} />
        <NavBar />
        <PercentPaid visibility={'visible'}/>
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