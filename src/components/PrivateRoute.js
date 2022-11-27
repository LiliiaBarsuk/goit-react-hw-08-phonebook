import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getIsRefreshing } from "redux/auth/selectors"


export const PrivatRoute = ({ component: Component, redirectTo = "/", ...routeProps }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} replace={true}/> : Component;
    
}