import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Thead, Tr, Tbody, Td, Th, Stack, Skeleton, ButtonGroup, IconButton, useToast } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

// import EditItem from './EditItem';

export default function TodoList() {

    const [items, setItems] = useState([]);
    const url = 'https://gm-todoapp.herokuapp.com/';

    const toast = useToast();
    
    useEffect(() => {
        axios.get(url)
            .then(res => {
                const items = res.data;
                setItems(items);
            })
            .catch(err => console.log(err));
    }, [items]);

    const removeItem = id => {
        axios.delete(url + id)
            .then(toast({
                title: 'Item Removed!',
                duration: '2000',
                isClosable: true,
                status: 'error'
            }))
            .catch(err => console.log(err));
    }

    const priorityColor = (pr) => {
        if(pr === 'Low') {
            return 'green.300';
        } else if(pr === 'Medium') {
            return 'yellow.400';
        } else {
            return 'red.400';
        }
    }

    // const { isOpen, onOpen, onClose } = useDisclosure();

    if(!items.length) {

        return(
            <Stack w="100%" p="10" mt="20">
                <Skeleton height="30px" />
                <Skeleton height="30px" />
                <Skeleton height="30px" />
            </Stack>
        )
    }

    return (

        <Container maxW="container.xl" mt="24">
            <Table variant="simple">
                <Thead fontSize="2xl"> 
                    <Tr>
                        <Th>Item</Th>
                        <Th>Priority</Th>
                        <Th isNumeric>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        items.map( item => {
                            return(
                                <Tr key={item._id} >
                                    <Td>{item.name}</Td>
                                    <Td color={ priorityColor(item.priority) }>{item.priority}</Td>
                                    <Td>
                                        <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" spacing={5} >
                                            {/* <IconButton icon={ <EditIcon /> } colorScheme="gray" size="sm" onClick={onOpen} /> */}
                                            <IconButton icon={ <DeleteIcon /> } colorScheme="red" mx="" size="sm" onClick={ () => removeItem(item._id) } />
                                        </ButtonGroup>
                                    </Td>
                                    {/* <Td display="none">
                                        <EditItem isOpen={isOpen} onClose={onClose} />
                                    </Td> */}
                                </Tr>
                            )                                
                        })
                    }                        
                </Tbody>
            </Table>
        
        </Container>

    )
}
