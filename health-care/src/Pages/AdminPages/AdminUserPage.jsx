import { Avatar, AvatarGroup, Box, Heading, HStack, Stack } from '@chakra-ui/react'
import React from 'react';
import AdminNav from '../../Components/AdminComponents/AdminNav';
import AdminUserCard from '../../Components/AdminComponents/AdminUserCard';

const AdminUserPage = () => {

  return (
    <Box  w={"100%"} gap={0} display="flex"  >
       <Box width="20%" >
            <AdminNav/>
       </Box>
    <Stack  w={"80%"} marginTop="-20px" >
    <Box textAlign={"center"} w="100%">
    <Heading mt={5} size={'lg'} >TOTAL USERS : {1}</Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
       <Avatar />
    </AvatarGroup>
</HStack>
    </Box >
   
    <Stack margin={"auto"} width="100%" justifyContent={"center"} >
       <Box margin={"auto"}   background={"#fff"} width={["100%","100%" ,"100%" , "80%"]} >
        <AdminUserCard/>
       </Box>
       </Stack> 
    </Stack>
    </Box>
  )
}

export default AdminUserPage;