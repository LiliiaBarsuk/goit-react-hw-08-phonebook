import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Aside, ContactsContainer } from "./ContactsPage.styled";
import { ButtonAdd } from "components/ButtonAdd/ButtonAdd";
import { Modal } from "components/Modal/Modal";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { FallingLines } from "react-loader-spinner";

const ContactsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    return (
        <>
        <ContactsContainer>
            <Aside>
                <ButtonAdd openModal={setIsModalOpen} />  
                <Filter />
      
                    {isLoading && !error && <FallingLines 
                        color="#0824AF"
                        width="100"
                        visible={true}
                        ariaLabel='falling-lines-loading'
                    />}
                <ContactList /> 
            </Aside>
        

        <Outlet />
         {isModalOpen && <Modal closeModal={setIsModalOpen}/>}
        </ContactsContainer>
       

        </>
    )
};

export default ContactsPage;
