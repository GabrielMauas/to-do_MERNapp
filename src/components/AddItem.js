import React from 'react';
import axios from 'axios';
import { Modal, ModalOverlay, ModalCloseButton, ModalHeader, ModalBody, ModalContent, useToast } from '@chakra-ui/react';
 
import ItemForm from './ItemForm';

export default function AddItem({ isOpen, onClose }) {

    const url = 'https://gm-todoapp.herokuapp.com/add-item/';

    const toast = useToast();

    const onSubmit = (data) => {
        // console.log(data);
        const item = {
            name: data.name,
            priority: data.priority
        }
        // console.log(item);
        axios.post(url, item)
            .then(toast({
                title: 'Item Added',
                duration: '2000',
                isClosable: true,
                status: 'success'
            }))
            .catch(err => console.log(err));
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size="sm" >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Item</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ItemForm onSubmit={onSubmit} onClose={onClose} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
