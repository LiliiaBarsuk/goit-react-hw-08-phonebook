import { useSelector } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Aside, ContactsContainer } from "./ContactsPage.styled";
import { ButtonAdd } from "components/ButtonAdd/ButtonAdd";
import { Modal } from "components/Modal/Modal";
import { getModalState } from "redux/contacts/selectors";
import { Outlet } from "react-router-dom";

export const ContactsPage = () => {
    const modalState = useSelector(getModalState);

    return (
        <>
        <ContactsContainer>
            <Aside>
                <ButtonAdd />  
                <Filter />
      
                    {/* {isLoading && !error && <FallingLines
                        color="#4fa94d"
                        width="100"
                        visible={true}
                        ariaLabel='falling-lines-loading'
                    />} */}
                <ContactList /> 
            </Aside>
        

        <Outlet />
         {modalState && <Modal />}
        </ContactsContainer>
       

        </>
    )
}