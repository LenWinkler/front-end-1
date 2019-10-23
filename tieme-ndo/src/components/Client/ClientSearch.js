import React, { useState } from "react";
import styled from 'styled-components';
import Header from '../Misc/Header';
import NavBar from '../Misc/NavBar';
import TableHeader from './TableHeader';
import ClientCard from './ClientCard';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  width: 300px;
  font-size: 20px;
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
    <section>
      <Header title={`Client List`} />
      <NavBar />
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
        <button type='submit'>Search</button>
      </StyledForm>
      <TableHeader />
      <div className="list">
        {filteredClient.map(client => {
          return <ClientCard key={client.id} client={client} />
        })}
      </div>
    </section>
  );
}

export default ClientSearch;