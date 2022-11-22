import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/auth/selectors"
import { NavLinkStyled, } from "./Navigation.styled"

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <nav>
            <NavLinkStyled to='/'>PhoneBook</NavLinkStyled>
            {isLoggedIn && <NavLinkStyled to='/contacts'>Contacts</NavLinkStyled>}   
        </nav>
    )
}