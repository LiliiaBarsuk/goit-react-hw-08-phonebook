import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 24px;
    font-weight: bold;
`;



export const FieldStyled = styled(Field)`
    padding: 5px;
    border-radius: 4px;
    border: none;
    color: #0A0D68;
    font-size: 20px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    font-size: 18px;
    color: #9d3158;
    margin-top: -10px;

`;

export const Button = styled.button`
min-width: 150px;
margin-top: 22px;
margin-left: auto;
margin-right: auto;
padding: 10px;
color: #0824AF;
font-size: 16px;
font-weight: bold;
background-color: transparent;
border-radius: 4px;
border: 1px solid #0824AF;
 box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

`
