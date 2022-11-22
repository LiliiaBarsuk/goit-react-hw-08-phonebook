import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, FormStyled, Label,  FieldStyled,  ErrorMessageStyled, Container } from './LogInForm.styled';

const initialValues = {
    email: '',
    password: '',
}  

export const LoginForm = () => {

  const dispatch = useDispatch();
    const handleSubmit = (values, {resetForm}) => {
      dispatch(
        logIn({
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
              Email
               <FieldStyled type="email" name="email" />
               < ErrorMessageStyled name="email" component="span"/>
            </Label>
            <Label >
              Password
              <FieldStyled type="password" name="password" />
              < ErrorMessageStyled name="password" component="span"/>
            </Label>
            <Button type="submit">Log in</Button>
            
          </FormStyled>
        </Formik>
        </Container>  
    )
}