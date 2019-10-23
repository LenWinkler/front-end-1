import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import ClientSearch from './ClientSearch';

const ClientList = props => {
  console.log('client list props', props)
  useEffect(() => {
    props.fetchData();
  }, [])

	return (
    <div>
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