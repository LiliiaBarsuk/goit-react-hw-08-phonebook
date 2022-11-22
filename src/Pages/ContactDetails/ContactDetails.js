import imag from 'img/icon-person.png';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { DetailsContainer, Img, Text } from './ContactDetails.styled';
import { setSelectedContactId } from 'redux/contacts/contactsSlice';
import { getContactById } from 'redux/contacts/selectors';

export const ContactDetails = () => {
    const  { id }  = useParams();
    const dispatch = useDispatch()
    
    dispatch(setSelectedContactId(id));

    const contact = useSelector(getContactById)

    return (
        <DetailsContainer>
            <Img src={imag} />
            <Text>Name: {contact.name}</Text>
            <Text>Phone: {contact.number}</Text>
        </DetailsContainer>
    )
}