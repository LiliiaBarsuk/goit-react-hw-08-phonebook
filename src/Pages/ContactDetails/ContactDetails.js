import imag from 'img/icon-person.png';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { DetailsContainer, Img, Text } from './ContactDetails.styled';
import { getContacts, getError, getIsLoading } from 'redux/contacts/selectors';
import { FallingLines } from 'react-loader-spinner';


const ContactDetails = () => {
    const  { id }  = useParams();
    const contacts = useSelector(getContacts);

    const contact = contacts.find(contact => contact.id === id);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    return (
        
        <DetailsContainer>
            {isLoading && !error && <FallingLines 
            color="#0824AF"
            width="100"
            visible={true}
            ariaLabel='falling-lines-loading'
        />}
            <Img src={imag} />
            <Text>Name: {contact.name}</Text>
            <Text>Phone: {contact.number}</Text>
        </DetailsContainer>
    )
};

export default ContactDetails;
