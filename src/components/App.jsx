import React, { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";



export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');
  
 const  saveContact = (newContact) => {
    const contact = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    }

    const newName = newContact.name.toLowerCase();
    const nameExist = contacts.map(contact => contact.name.toLowerCase()).some(el => el === newName);

    if (nameExist) {
       return alert(`${newContact.name} is already in contacts`);   
    }

    setContacts(prevState => [...prevState, contact])

  }
  
  const saveFilterValue = evt => {
    setFilter(evt.target.value)
  };
  
  const filterValue = filter.toLowerCase(); 
  const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }


  useEffect (
    () => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
        
    }, [contacts])
  
    return (
      <div
        style={{
          height: '100vh',
          padding: 40,
          fontSize: 20,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
      <ContactForm onSaveContact={saveContact} />
     
      <ContactList value={filter} arrayOfContacts={filtredContacts} title='Contacts' onSaveFilterValue={saveFilterValue} deleteContact={deleteContact}/>
      </div>
    );
  }
