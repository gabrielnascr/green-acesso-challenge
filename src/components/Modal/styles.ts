import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px 20px;
  min-width: 460px;
  position: relative;

  z-index: 999;
`;
