import { useDispatch } from "react-redux";
import { setModal } from "../../redux/contacts/contactsSlice";
import { AddIcon, ButtonAddStyled } from "./ButtonAdd.styled";

export const ButtonAdd = () => {

    const dispatch = useDispatch();
    
    const setModalState =() => {
        dispatch(setModal());
      };

    return (
        <ButtonAddStyled onClick={setModalState}><AddIcon />Add new contact</ButtonAddStyled>
    )
}