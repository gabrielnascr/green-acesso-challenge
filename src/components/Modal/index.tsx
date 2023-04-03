import React from 'react';

import { ModalContainer, ModalOverlay } from './styles';

interface ModalBaseProps {
  children: React.ReactNode
}

export default function ModalBase({ children }: ModalBaseProps) {
  return (
    <ModalOverlay>
      <ModalContainer>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}