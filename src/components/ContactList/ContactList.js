import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlise";
import { Button, Item, List } from "components/ContactList/ContactList.styled";
import { Filter } from "../Filter/Filter";
import { getContacts, getFilter } from "redux/selectors";

const getVisibleContacts = (contacts, filterValue) => {
  if (!filterValue) {
    return contacts
  }
  return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));

}

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filterValue = useSelector(getFilter);

  const filtredContacts = getVisibleContacts(contacts, filterValue);
  
  function delContact(id) {
    dispatch(deleteContact(id));
  };

  return (
    <>
    <h2>Contacts</h2>
    <Filter />
    <List>
      {filtredContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number} 
          <Button type="button" onClick={() => delContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}  
    </List>
    </>
  )
}
