import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Button, FormStyled, Label,  FieldStyled,  ErrorMessageStyled, Container } from './RegistrationForm.styled';

const initialValues = {
    name: '',
    email: '',
    password: '',
}  

export const RegistrationForm = () => {
  const dispatch = useDispatch();




    const handleSubmit = (values, {resetForm}) => {
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          }));
        resetForm();
      
    };
     
    return (
        <Container>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <FormStyled>
            <Label >
              Name
               <FieldStyled type="text" name="name" />
               < ErrorMessageStyled name="name" component="span"/>
            </Label>
            <Label >
              Email
               <FieldStyled type="email" name="email" />
               < ErrorMessageStyled name="email" component="span"/>
            </Label>
            <Label >
              Password
              <FieldStyled type="password" name="password" />
              < ErrorMessageStyled name="password" component="span"/>
            </Label>
            <Button type="submit">Sign up</Button>
            
          </FormStyled>
        </Formik>
        </Container>  
    )
}