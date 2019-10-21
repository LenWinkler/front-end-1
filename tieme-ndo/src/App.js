import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ClientList from './components/Client/ClientList';
import SignUp from './components/Forms/SignUp';
import StaffList from './components/Staff/StaffList';
import StaffCard from './components/Staff/StaffCard';
import ClientCard from './components/Client/ClientCard';
import AddClientForm from './components/Forms/AddClientForm'
import UpdateClientForm from './components/Forms/UpdateClientForm'
import SignIn from './components/Forms/SignIn';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <SignIn />

      <Route path="/login" component={App} /> 

      <Route path="/sign-up" component={SignUp} />

      <Route path="/client-list" component={ClientList} />

      <Route path="/staff-list" component={StaffList} />

      <Route path="/staff-card/:id" component={StaffCard} />

      <Route path="/client-card/:id" component={ClientCard} />

      <Route path="/add-client" component={AddClientForm} />

      <Route path="/update-client/:id" component={UpdateClientForm} />
    </div>
  );
}

export default App;
