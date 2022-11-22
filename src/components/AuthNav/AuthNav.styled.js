import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const AuthNavLinkStyled = styled(NavLink)`
display: inline-block;
min-width: 150px;
padding: 10px;
color: #81CBEE;
text-align: center;
font-family: sans-serif;
font-size: 16px;
font-weight: bold;
background-color: transparent;
border-radius: 4px;
border: 1px solid #81CBEE;
text-decoration: none;


    &:not(:last-child) {
        margin-right: 30px;
    }


`