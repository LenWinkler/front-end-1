import React, { useState } from "react";
import styled from 'styled-components';
import TableHeader from './TableHeader';
import ClientCard from './ClientCard';

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

const OverFlow = styled.div`
  height: 70vh;  
  overflow: auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

const ClientSearch = (props) => {
  const [category, setCategory] = useState('name');
  const [query, setQuery] = useState('');

  const handleSelectChange = event => {
    setCategory(event.target.value);
  }

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredClient = props.clients.filter(client => {
    if (category === 'name') {
      return client.name.toLowerCase().includes(query.toLowerCase())
    } else if (category === 'village') {
      return client.village.toLowerCase().includes(query.toLowerCase())
    } else if (category === 'loanInitialDate') {
      return client.loanInitialDate.toLowerCase().includes(query.toLowerCase())
    }
  });

  return (
    <div>
      <StyledSearch>
        <StyledForm className="search">
          <select value={category} onChange={handleSelectChange}>
            <option value='name'>Name</option>
            <option value='village'>Village</option>
            <option value='loanInitialDate'>Loan Start Date</option>
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
      <OverFlow>
        <TableHeader />
        <StyledContainer>
          {filteredClient.map(client => {
                return <ClientCard key={client.id} client={client} />
          })}
        </StyledContainer>
      </OverFlow>
    </div>
  );
}

export default ClientSearch;