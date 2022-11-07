import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { Button, Item, List } from "components/ContactList/ContactList.styled";
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
 console.log(filterValue);
  const filteredContacts = getVisibleContacts(contacts, filterValue);
  console.log(filteredContacts);
  function delContact(id) {
    dispatch(deleteContact(id));
  };

  return (
    <>
    <List>
      {filteredContacts.map(contact => (
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
