import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { deleteContact } from "../../redux/operations";
import { Button, Item, List } from "components/ContactList/ContactList.styled";
import { getFilteredContacts } from "redux/selectors";


export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getFilteredContacts);

  function delContact(id) {
    dispatch(deleteContact(id));
  };

  return (
    <>
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.phone} 
          <Button type="button" onClick={() => delContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}  
    </List>
    </>
  )
}
