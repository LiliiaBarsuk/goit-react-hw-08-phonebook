import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth/selectors"


export const PublicRoute = ({ component: Component, redirectTo="/", ...routeProps}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo}  replace={true}/> : Component;

}