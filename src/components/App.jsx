
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { FallingLines } from  'react-loader-spinner';
import { useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/selectors";

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

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
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel='falling-lines-loading'
      />}
      <ContactList />
      </div>
    );
  }
