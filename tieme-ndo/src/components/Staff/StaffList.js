import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchStaffData } from '../../actions/index';
import Header from '../Misc/Header';
import logo from '../../img/cropped-tiem_logo-3.jpg';
import NavBar from '../Misc/NavBar';
import StaffSearch from './StaffSearch';
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

const StaffList = props => {
  const [isStaffFetching, setIsStaffFetching] = useState(false)
  useEffect(() => {
    setIsStaffFetching(props.isStaffFetching);
    props.fetchStaffData();
  }, [])

	return (
    <div>
      <Header title={`Staff List`} />
      <StyledDiv>
        <StyledLogo src={logo} alt='tieme ndo logo' />
        <NavBar />
        <div></div>
      </StyledDiv>
      <StaffSearch staffMembers={props.staffMembers}/>
    </div>
	)
}

const mapStateToProps = state => {
  return {
    staffMembers: state.employees,
    isStaffFetching: state.isStaffFetching
  }
}

export default connect(mapStateToProps, { fetchStaffData })(StaffList);