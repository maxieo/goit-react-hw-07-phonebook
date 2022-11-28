import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export default function App() {
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
  


  // const [contacts, setContacts] = useLocalStorage(defaultContacts);
  // const [filter, setFilter] = useState('');
  
  // const formSubmit = ({ name, number }) => {
  //   const newContacts = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(option => option.name.toLowerCase() === name.toLowerCase())
  //   ) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevState => [...prevState, newContacts]);
  // };
  

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState => 
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const visibleContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // })
  




