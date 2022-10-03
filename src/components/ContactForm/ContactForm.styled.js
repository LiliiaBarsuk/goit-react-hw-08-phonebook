import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 24px;
    font-weight: bold;
`;

export const Button = styled.button`
    width: 150px;
    padding: 5px;
    border: 1px solid silver;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const FieldStyled = styled(Field)`
    padding: 5px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    font-size: 20px;
    color: red;
    margin-top: -10px;
`;

