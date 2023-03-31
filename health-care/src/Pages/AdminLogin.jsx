import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    useToast
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  export default function AdminLogin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const toast=useToast();

    const handleSubmit=()=>{
        if(email==="rutuvikpatil@gmail.com" && password==="admin"){
            toast({
                title:"Welcome Admin !!",
                status:"success",
                isClosable:true,
                position:'top',
                duration:2000
            })
            setEmail("")
            setPassword("")
            navigate('/admindashboard')
        }else{
            toast({
                title:"Wrong Credentials !!",
                status:"error",
                isClosable:true,
                position:'top',
                duration:2000
            })
        }
    };
    
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your admin account</Heading>
            <FormControl id="admin-email">
              <FormLabel>Email</FormLabel>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
            </FormControl>
            <FormControl id="admin-password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }