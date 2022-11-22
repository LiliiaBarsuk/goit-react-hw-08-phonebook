import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigaion/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { HeaderStyled } from "./Header.styled";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getIsRefreshing } from "redux/auth/selectors";

export const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);

    return (
        <HeaderStyled>
           <Navigation />
           {isLoggedIn && !isRefreshing && <UserMenu />}
           {!isLoggedIn && !isRefreshing && <AuthNav />}

        </HeaderStyled>
    )
}