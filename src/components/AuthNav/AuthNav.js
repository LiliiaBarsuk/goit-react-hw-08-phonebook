import { NavLink } from "react-router-dom"
import { AuthNavLinkStyled } from "./AuthNav.styled"


export const AuthNav = () => {
    return (
        <div>
        <AuthNavLinkStyled to='/login'>Log in</AuthNavLinkStyled>
        <AuthNavLinkStyled to='/register'>Sign up</AuthNavLinkStyled>
    </div>
    )
}