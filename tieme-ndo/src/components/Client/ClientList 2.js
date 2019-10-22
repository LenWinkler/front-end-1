import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from '../Forms/SearchForm';
import HeaderNav from '../../HeaderNav';

const ClientList = () => {
  const [clients, setClients] = useState([]);

	useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
			.then(response => {
        console.log(response);
        setClients(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});
  }, []);

	return (
    <div>
      <HeaderNav />
      <SearchForm clients={clients}/>
    </div>
	)
}

export default ClientList;