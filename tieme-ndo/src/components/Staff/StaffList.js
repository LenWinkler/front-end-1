import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStaffData } from '../../actions/index';
import Header from '../Misc/Header';
import AddClientButton from '../Misc/AddClientButton';
import NavBar from '../Misc/NavBar';
import PercentPaid from '../Misc/PercentPaid';
import StaffSearch from './StaffSearch';
import styled from 'styled-components';

const StyledSubHeader = styled.div`
  display: grid;
  grid-template-columns: 200px auto 200px;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const StaffList = props => {
  useEffect(() => {
    props.fetchStaffData();
  }, [])

  if (props.isStaffFetching) {
    return (
      <p>Loading Staff Data...</p>
    )
  } else {
    return (
      <div>
        <Header title={`Staff List`} />
        <StyledSubHeader>
          <AddClientButton visibility={'hidden'} />
          <NavBar />
          <PercentPaid visibility={'hidden'} />
        </StyledSubHeader>
        <StaffSearch staffMembers={props.staffMembers}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    staffMembers: state.employees,
    isStaffFetching: state.isStaffFetching
  }
}

export default connect(mapStateToProps, { fetchStaffData })(StaffList);