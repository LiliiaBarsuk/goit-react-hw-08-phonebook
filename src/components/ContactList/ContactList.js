import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { deleteContact } from "../../redux/contacts/operations";
import { Button, DelIcon, Item, List, NavLinkStyled } from "components/ContactList/ContactList.styled";
import { getFilteredContacts } from "redux/contacts/selectors";
import { setSelectedContactId } from "redux/contacts/contactsSlice";


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
          <NavLinkStyled to={`${contact.id}`} >
          {contact.name} </NavLinkStyled>
          <Button type="button" onClick={() => delContact(contact.id)}>
            <DelIcon />
          </Button>
        </Item>
      ))}  
    </List>
    </>
  )
}
