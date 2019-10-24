import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import Header from '../Misc/Header';
import AddClientButton from '../Misc/AddClientButton';
import NavBar from '../Misc/NavBar';
import PercentPaid from '../Misc/PercentPaid';
import ClientSearch from './ClientSearch';
import styled from 'styled-components';

const StyledSubHeader = styled.div`
  display: grid;
  grid-template-columns: 200px auto 200px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto
`;

const ClientList = props => {
  useEffect(() => {
    props.fetchData();
  }, [])

	return (
    <div>
      <Header title={`Client List`} />
      <StyledSubHeader>
        <AddClientButton visibility={'visible'} />
        <NavBar />
        <PercentPaid visibility={'visible'}/>
      </StyledSubHeader>
      <ClientSearch clients={props.clients}/>
    </div>
	)
}

const mapStateToProps = state => {
  return {
    clients: state.farmers,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchData })(ClientList);