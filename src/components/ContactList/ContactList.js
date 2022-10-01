export const ContactList = ({ arrayOfContacts }) => {
  return (

    <>
    <ul>
      {arrayOfContacts.map(contact => (
        <li>{contact.name}</li>
      ))}  
    </ul>
    </>
  )
}