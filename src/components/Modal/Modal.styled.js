import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalStyled = styled.div`
    color: #0A0D68;
    max-width: calc(100vw - 48px);
    min-width: 500px;
    max-height: calc(100vh - 24px);
    padding: 40px 30px;
    border-radius: 4px;
   
    border: none;
    box-shadow:
    0px 1px 1px rgba(0, 0, 0, 0.12),
    0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
    background: linear-gradient(90deg, rgba(32,142,221,1) 9%, rgba(88,192,243, 1) 37%, rgba(53,173,233,1) 79%);
`;

export const Header = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
`;

