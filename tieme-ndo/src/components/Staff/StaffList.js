import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStaffData } from '../../actions/index';
import Header from '../Misc/Header';
import AddClientButton from '../Misc/AddClientButton';
import NavBar from '../Misc/NavBar';
import PercentPaid from '../Misc/PercentPaid';
import StaffSearch from './StaffSearch';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 200px auto 200px;
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

const StaffList = props => {
  // console.log('staff list props', props)
  useEffect(() => {
    props.fetchStaffData();
  }, [])

	return (
    <div>
      <Header title={`Staff List`} />
      <StyledDiv>
        <AddClientButton visibility={'hidden'} />
        <NavBar />
        <PercentPaid visibility={'hidden'} />
      </StyledDiv>
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