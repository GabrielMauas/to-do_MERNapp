import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm';
// import { useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import { Modal, ModalOverlay, ModalCloseButton, ModalHeader, ModalBody, ModalContent, useToast } from '@chakra-ui/react';


export default function EditItem({ isOpen, onClose, id }) {

    // const match = useRouteMatch();
    // const id = match.params.id;
    const [item, setItem] = useState();
    const url = 'https://gm-todoapp.herokuapp.com/';

    const toast = useToast();

    useEffect(() => {
        axios.get(url + id)
            .then(res => {
                setItem(res.data);
            })
    }, [id]);

    const onSubmit = data => {
        console.log(id);
        axios.post(url + id, data)
            .then(toast({
                title:'Item Updated',
                duration: '2000',
                status: 'success'
            }))
            .catch(err => console.log(err));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" size="sm" >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Item</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ItemForm item={item} onSubmit={onSubmit} onClose={onClose} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
