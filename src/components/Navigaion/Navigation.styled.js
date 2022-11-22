import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const NavLinkStyled = styled(NavLink)`
    font-size: 40px;
    font-weight: 700;
    text-decoration: none;
    color: #81CBEE;


    &:not(:last-child) {
        margin-right: 40px;
    }

    &.active{
        color: #fff;
        text-decoration: underline;
    }


`