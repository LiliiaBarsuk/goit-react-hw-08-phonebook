import { AddIcon, ButtonAddStyled } from "./ButtonAdd.styled";

export const ButtonAdd = ({ openModal }) => {
    return (
        <ButtonAddStyled onClick={() => openModal(true)}><AddIcon />Add new contact</ButtonAddStyled>
    )
}