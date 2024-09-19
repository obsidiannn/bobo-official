'use client'

import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useRef } from "react";

export interface ConfirmModalProps {
    visible: boolean;
    title: string;
    onClose: (confirm: boolean) => void;
}

function ConfirmModal(props: ConfirmModalProps) {

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={props.visible}
            onClose={() => props.onClose(false)}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{props.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => props.onClose(true)}>
                        Save
                    </Button>
                    <Button onClick={() => props.onClose(false)}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ConfirmModal