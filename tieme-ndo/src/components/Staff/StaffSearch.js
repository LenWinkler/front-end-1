import React, { useState } from "react";
import styled from 'styled-components';
import StaffCard from './StaffCard';

const StyledSearch = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  width: 300px;
  font-size: 20px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const StaffSearch = (props) => {
  const [category, setCategory] = useState('username');
  const [query, setQuery] = useState('');

  const handleSelectChange = event => {
    setCategory(event.target.value);
  }

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredStaff = props.staffMembers.filter(member => {
    if (category === 'username') {
      return member.username.toLowerCase().includes(query.toLowerCase())
    } else if (category === 'email') {
      return member.email.toLowerCase().includes(query.toLowerCase())
    }
  });

  return (
    <div>
      <StyledSearch>
        <StyledForm className="search">
          <select value={category} onChange={handleSelectChange}>
              <option value='username'>Username</option>
              <option value='email'>Email</option>
          </select>
          <StyledInput
              type="text"
              onChange={handleInputChange}
              value={query}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search"
              autoComplete="off"
          />
        </StyledForm>
      </StyledSearch>
      <StyledContainer>
        {filteredStaff.map(member => {
            return <StaffCard key={member.id} member={member} />
        })}
      </StyledContainer>
    </div>
  );
}

export default StaffSearch;