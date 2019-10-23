import React, { useState } from "react";
import styled from 'styled-components';
import TableHeader from '../Client/TableHeader';
import ClientCard from '../Client/ClientCard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

const StyledSearch = styled.div`
  display: flex;
`;

const StyledForm = styled.form`
  // display: flex;
  // justify-content: center;
`;

const StyledDropdown = styled(Dropdown)`
  padding: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  width: 300px;
  // line-height: 30px;
  font-size: 20px;
  // padding: 5px;
`;

const SearchForm = (props) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  // const options = ['Client', 'Village', 'Loan Start Date']
  // const defaultOption = options[0];
  
  // const handleDropDownChange = event => {
  //   setCategory(event.value);
  //   console.log(event);
  // }

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSelectChange = event => {
    setCategory(event.target.value);
  }

  const submitForm = event => {
    event.preventDefault();
  };

  const filteredClient = props.clients.filter((client) => {
    if (category === '') {
    return props.clients;
    }
    else if (category === 'name') {
    return client.name.toLowerCase().includes(query.toLowerCase())
  } else if (category === 'village') {
    return client.village.toLowerCase().includes(query.toLowerCase())
  }
  });

  return (
    <section>
      <StyledSearch>
        {/* <StyledDropdown options={options} onChange={handleDropDownChange} value={defaultOption} placeholder='Select a category'/> */}

        <StyledForm className="search" onSubmit={submitForm}>
        <select value={category} onChange={handleSelectChange}>
          <option value='name'>Name</option>
          <option value='village'>Village</option>
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
      </StyledSearch>
      <TableHeader />
      <div className="list">
        {filteredClient.map(client => {
          return <ClientCard key={client.name} client={client} />
        })}
      </div>
    </section>
  );
}

export default SearchForm;