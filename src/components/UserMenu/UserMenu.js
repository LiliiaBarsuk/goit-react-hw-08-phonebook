import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/operations"
import { getUser } from "redux/auth/selectors"
import { Button, ContainerMenu } from "./UserMenu.styled"

export const UserMenu = () => {

    const user = useSelector(getUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
      };

    return (
        <ContainerMenu>
            <p>{user.name}</p>
            <Button onClick={handleLogout}>Log out</Button>
        </ContainerMenu>
    )
}