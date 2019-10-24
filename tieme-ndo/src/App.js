import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ClientList from './components/Client/ClientList';
import SignUp from './components/Forms/SignUp';
import StaffList from './components/Staff/StaffList';
import StaffCard from './components/Staff/StaffCard';
import ClientCard from './components/Client/ClientCard';
import AddClient from './components/Forms/AddClient'
import UpdateClient from './components/Forms/UpdateClient'
import DeleteClient from './components/Forms/DeleteClient';
import SignIn from './components/Forms/SignIn';
import Private from './components/Auth/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <h1>Tieme Ndo</h1> */}

      <Route exact path="/" component={SignIn} /> 

      <Route path="/sign-up" component={SignUp} />

      <Private path="/client-list" component={ClientList} />

      <Private path="/staff-list" component={StaffList} />

      <Private path="/staff-card/:id" component={StaffCard} />

      <Private path="/client-card/:id" component={ClientCard} />

      <Private path="/add-client" component={AddClient} />

      <Private path="/update-client/:id" component={UpdateClient} />

      <Private path="/delete-client/:id" component={DeleteClient} />
    </div>
  );
}

export default App;
