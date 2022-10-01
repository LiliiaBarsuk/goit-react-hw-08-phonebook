import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),    
  });

const initialValues = {
    name: ''
  }
  
export const ContactForm = ({ onSaveContact }) => {
  const handleSubmit = (values) => {   
    onSaveContact(values)
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor="name">Name
           <Field type="text" name="name" />
           <ErrorMessage name="name" component="span"/>
        </label>
        <button type="submit">Add contact</button>
        
      </Form>
    </Formik>  
  )

}