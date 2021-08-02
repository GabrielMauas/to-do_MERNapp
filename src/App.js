import React from 'react';
import { Heading, HStack, IconButton, Box, Text, useColorMode, useDisclosure, Link, Stack } from '@chakra-ui/react';
import { AddIcon, MoonIcon, SunIcon, ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons';

// Import the Components
import TodoList from './components/TodoList';
import AddItem from './components/AddItem';


const App = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()


  return(
    <div>
      <HStack position="fixed" top="0" height="80px" mb="20" bgColor="gray.700" color="white" w="100%" p="5" display="flex" justifyContent={["space-between"]} boxShadow="lg" >
        <Heading>To-Do App</Heading>
        <Box>
          <IconButton bgColor="gray.600" mx="5" icon={<AddIcon /> } onClick={onOpen} />
          <IconButton bgColor="gray.600"  icon={ colorMode === "light" ? <SunIcon /> : <MoonIcon /> } onClick={ toggleColorMode } />
        </Box>
      </HStack>
      <TodoList />
      <AddItem isOpen={isOpen} onClose={onClose} />
      <HStack position="fixed" bottom="0" height={["", "20px"]} bgColor="gray.700" color="white" w="100%" p="5" dispaly="flex" justifyContent="space-between">
        <Text>Made by <Link href="https://linktr.ee/gabrielmauas" isExternal>Gabriel Mauas <ExternalLinkIcon /></Link></Text>
        <Stack spacing={3} direction="row">
          <Link href="https://github.com/GabrielMauas/to-do_MERNapp" isExternal>Code <LinkIcon /></Link>
        </Stack>
      </HStack>
    </div>
  )
}

export default App;
