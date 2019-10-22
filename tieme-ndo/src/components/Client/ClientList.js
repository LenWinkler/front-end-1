import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions/index';
import SearchForm from '../Forms/SearchForm';

const ClientList = props => {
  
  useEffect(() => {
    props.fetchData();
  }, [])

	return (
    <div>
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