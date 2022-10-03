import { Button, Item, List } from "components/ContactList/ContactList.styled";
import { Filter } from "../Filter/Filter";
import PropTypes from 'prop-types';

export const ContactList = ({ arrayOfContacts, title, onSaveFilterValue, deleteContact}) => {
  return (

    <>
    <h2>{title}</h2>
    <Filter onSaveFilterValue={onSaveFilterValue}/>
    <List>
      {arrayOfContacts.map(contact => (
        <Item key={contact.id}>{contact.name}: {contact.number} <Button type="button" onClick={() => deleteContact(contact.id)}>Delete</Button></Item>
      ))}  
    </List>
    </>
  )
}

ContactList.propTypes = {
  arrayOfContacts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired, 
  onSaveFilterValue: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
}