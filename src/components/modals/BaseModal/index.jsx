import { Modal, ModalBody, ModalHeader, ModalContent, ModalCloseButton, ModalOverlay } from '@chakra-ui/react';

export default function BaseModal({ isOpen, onClose, title, children }) {
   return (
      <Modal isCentered size='lg' isOpen={isOpen} onClose={onClose}>
         <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)' />
         <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {children}
            </ModalBody>
         </ ModalContent>
      </Modal>
   )
}