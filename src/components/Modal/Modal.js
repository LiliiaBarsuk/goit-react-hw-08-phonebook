import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Header, ModalStyled, Overlay } from "./Modal.styled";
import { ContactForm } from "components/ContactForm/ContactForm";

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal }) => {

    const closeByKeyDown = e => {
        if(e.code === 'Escape') {
            closeModal(false);
        } 
    }

    const closeByClickOnBackdrop = e => {
        if(e.target === e.currentTarget) {
            closeModal(false);
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
                    <ContactForm closeModal={closeModal} />
                </ModalStyled>
            </Overlay>,
            modalRoot
        )
};

