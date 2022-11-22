import styled from "@emotion/styled";
import { BsFillPersonPlusFill } from "react-icons/bs";

export const ButtonAddStyled = styled.button`
display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
    height: 50px;
    border: none;
    background-color: #0824AF;
    border-radius: 4px;
    padding: 35px;
    color: #81CBEE;
font-family: sans-serif;
font-size: 30px;
font-weight: bold;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    
`;

export const AddIcon = styled(BsFillPersonPlusFill)`
   margin-right: 20px;
width: 50px;
   height: 50px; 
   fill: #81CBEE;
`;