import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, FormStyled, Label,  FieldStyled,  ErrorMessageStyled } from './ContactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlise";
import { getContacts } from 'redux/selectors';


const schema = yup.object().shape({
    name: yup.string().min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required").matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$", 
      "Error! Name may contain only letters, apostrophe, dash and spaces."
    ), 
    number:  yup.string().required("Phone number is required").matches(
      "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}", 
      "Error! Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
    ),  
  });

const initialValues = {
    name: '',
    number: '',
  }
  
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts)

  const handleSubmit = (values, {resetForm}) => {
    const newName = values.name.toLowerCase();
    const nameExist = contacts.map(contact => contact.name.toLowerCase()).some(el => el === newName);

    if (nameExist) {
       return alert(`${values.name} is already in contacts`);   
    }
    
    dispatch(addContact(values));
    resetForm()
  };


  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <FormStyled>
        <Label >
          Name
           <FieldStyled type="text" name="name" />
           < ErrorMessageStyled name="name" component="span"/>
        </Label>
        <Label >
          Phone number
          <FieldStyled type="tel" name="number" />
          < ErrorMessageStyled name="number" component="span"/>
        </Label>
        <Button type="submit">Add contact</Button>
        
      </FormStyled>
    </Formik>  
  )

}

