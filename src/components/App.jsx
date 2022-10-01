import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
  }
  
  saveContact = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] })
    );   
  }
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <ContactForm onSaveContact={this.saveContact}/>
      {/* <button type="button" onClick={() => console.log(this.state)}>contact</button> */}
      <ContactList arrayOfContacts={this.state.contacts}/>
      </div>
    );
  }
};
