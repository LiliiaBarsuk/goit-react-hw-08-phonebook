import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
      
    if (parsedContacts) {
        this.setState({contacts: parsedContacts})
      }  
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
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
