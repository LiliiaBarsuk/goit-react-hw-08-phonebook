import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setModal } from "../../redux/contacts/contactsSlice";
import { createPortal } from "react-dom";
import { Header, ModalStyled, Overlay } from "./Modal.styled";
import { ContactForm } from "components/ContactForm/ContactForm";

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
    const dispatch = useDispatch();

    const closeByKeyDown = e => {
        if(e.code === 'Escape') {
            dispatch(setModal());
        } 
    }

    const closeByClickOnBackdrop = e => {
        if(e.target === e.currentTarget) {
            dispatch(setModal());
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', closeByKeyDown);
        
        return () => { window.removeEventListener('keydown', closeByKeyDown) };
    })
   
        return createPortal(
            <Overlay onClick={closeByClickOnBackdrop}>
                <ModalStyled>
                    <Header>Fill the details of the new contact</Header>
                    <ContactForm />
                </ModalStyled>
            </Overlay>,
            modalRoot
        )
};

