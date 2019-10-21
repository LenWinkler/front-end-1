import React, { useState } from "react";
import styled from 'styled-components';
import ClientCard from '../Client/ClientCard';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 25px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  width: 300px;
  line-height: 30px;
  font-size: 20px;
  padding: 5px;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchForm = (props) => {
  const [query, setQuery] = useState('');
  
  const filteredClient = props.clients.filter(client =>
        client.name.toLowerCase().includes(query.toLowerCase())
      );
  
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
      <StyledForm className="search">
        <StyledInput
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </StyledForm>
      <StyledCardsContainer className="list">
        {filteredClient.map(client => {
          return <ClientCard key={client.name} client={client} />
        })}
      </StyledCardsContainer>
    </section>
  );
}

export default SearchForm;