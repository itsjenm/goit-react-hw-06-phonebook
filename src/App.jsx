import React from 'react';
import Phonebook  from './components/Contact Form/Phonebook';
import Filter from './components/Filter/Filter';

//an application that stores your phonebook contacts

export const App = () => {

  return (
    <div>
      <h1 style={{ marginLeft: '10px' }}>Phonebook</h1>
      <Phonebook />

      <h2 style={{ marginLeft: '10px' }}>Contacts</h2>

      <Filter />

    </div>
  );
};

export default App;