import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStaffData } from '../../actions/index';
import StaffSearch from './StaffSearch';

const StaffList = props => {
  console.log('staff list props', props)
  useEffect(() => {
    props.fetchStaffData();
  }, [])

	return (
    <div>
      <StaffSearch staffMembers={props.staffMembers}/>
    </div>
	)
}

const mapStateToProps = state => {
  return {
    staffMembers: state.employees
  }
}

export default connect(mapStateToProps, { fetchStaffData })(StaffList);