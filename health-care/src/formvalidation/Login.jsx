import React, { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { login } from "../redux/authReducer/actions";

export default function LoginPage() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
   const state= useSelector((store) => 
    
      store.authReducer
      
     
  );

  console.log(state)
  const handleLogin = () => {
    const details = { email, password };
    dispatch(login(details)).then((res) => {
     
      if (res === "Incorrect password ") {
        toast({
          title: "Incorrect Password.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else if (state.msg=="wrong") {
        toast({
          title: "Not Match",
          status: "error",
          
          duration: 4000,
          isClosable: true,
        });
      }
      else if (state.msg === "") {
        toast({
          title: "Not Match",
          status: "error",
          
          duration: 4000,
          isClosable: true,
        });
      }
      
      else if (state.lastname != undefined||state.lastname !="") {
        toast({
          title: "Login Sucessfully.",
          description: "lets visit every pages..",
          status: "success",
          duration: 4000,
          position: "top",
          isClosable: true,
        });
      }
    });
  
    
  
  };
  if (state.msg == "login successfull") {
    return <Navigate to="/" />;
  }
  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
     
      bg="gray.50"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login  to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          
          bg="gray.50"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={(e) => setEmail(e.target.value)} type="email"  value={email}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New User?{" "}
                  <Link href="/signup" color={"blue.400"}>
                    Register Here
                  </Link>
                </Text>
              </Stack>
              <Button
                onClick={handleLogin}
                color={"white"}
                _hover={{ bgColor: "rgb(5,161,163)" }}
                bgColor={"rgb(15,181,183)"}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
