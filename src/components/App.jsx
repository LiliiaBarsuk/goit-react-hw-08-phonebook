import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  
  saveContact = (newContact) => {
    const contact = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    }

    const newName = newContact.name.toLowerCase();
    const nameExist = this.state.contacts.map(contact => contact.name.toLowerCase()).some(el => el === newName);

    if (nameExist) {
       return alert(`${newContact.name} is already in contacts`);   
    }

    this.setState(({contacts}) => ({ contacts: [...contacts, contact] })) 
  }
  
  saveFilterValue = evt => {
    this.setState({ filter: evt.target.value });
  };

  filtredContacts() { 
    const { filter, contacts } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  render() {
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
      <ContactForm onSaveContact={this.saveContact} />
     
      <ContactList value={this.state.filter} arrayOfContacts={this.filtredContacts()} title='Contacts' onSaveFilterValue={this.saveFilterValue} deleteContact={this.deleteContact}/>
      </div>
    );
  }
};
