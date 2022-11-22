import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigaion/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { HeaderStyled } from "./Header.styled";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUser } from "redux/auth/selectors";

export const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <HeaderStyled>
           <Navigation />
           {isLoggedIn && <UserMenu />}
           {!isLoggedIn && <AuthNav />}

        </HeaderStyled>
    )
}