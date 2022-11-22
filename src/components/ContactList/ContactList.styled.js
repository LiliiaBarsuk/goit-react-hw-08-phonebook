import styled from '@emotion/styled';
import { BsXLg } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
width: 50px;
height: 50px;
padding: 10px;
margin-left: auto;
color: #0A0D68;
font-size: 16px;
font-weight: bold;
background-color: transparent;
border-radius: 50%;
border: none;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);

`;

export const DelIcon = styled(BsXLg)`
   width: 100%;
   height: 100%;
   fill: #0824AF;
`;

export const Item = styled.li`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    

    &:not(:last-child) {
        margin-bottom: 30px;
    }

`;


export const List = styled.ul`
   margin-top: 40px;
   
`;

export const NavLinkStyled = styled(NavLink)`
    color: #0A0D68;
    font-size: 28px;
    text-decoration: none;

    
`;


