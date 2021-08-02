import React from 'react'
import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export default function ItemForm({ item, onSubmit, onClose}) {

    // const { register, handleSubmit } = useForm({
    //     defaultValues: 
    //         {
    //             name: item ? item.name : "",
    //             priority: item ? item.priority : ""
    //         },
    // });

    const { register, handleSubmit } = useForm();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
    });

    return (
        <div>
            <form onSubmit={submitHandler} >
                <FormControl>
                    <FormLabel>Item Name</FormLabel>
                    <Input {...register('name')} type="text" placeholder="New item..." autoComplete="off" spellCheck="false" autoCapitalize="sentences" ></Input>
                </FormControl>
                <FormControl my="4">
                    <FormLabel>Priority</FormLabel>
                    <Select {...register('priority')} placeholder="-- Select --">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </Select>
                </FormControl>
                <Button type="submit" onClick={onClose} size="lg" rightIcon={ <AddIcon /> } colorScheme="teal" my="4" mx="0">Done</Button>
            </form>
        </div>
    )
}
