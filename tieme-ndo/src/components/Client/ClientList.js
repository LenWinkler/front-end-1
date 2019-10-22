import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import SearchForm from '../Forms/SearchForm';
import ClientCard from './ClientCard';

const ClientList = props => {
  console.log('client list props', props)
  useEffect(() => {
    props.fetchData();
  }, [])

	return (
    <div>
      {props.clients.map(item => (
        <ClientCard key={item.id} client={item} />
      ))}
        <SearchForm clients={props.clients}/>
    </div>
	)
}

const mapStateToProps = state => {
  return {
    clients: state.farmers
  }
}

export default connect(mapStateToProps, { fetchData })(ClientList);