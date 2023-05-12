import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import GoogleButton from "react-google-button";
// import { useNavigate } from "react-router-dom";
import { UseAuth } from "../landingcomponent/PagesMain/authfolderrr/Authcontext";

export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);


     const { googlesignin} = UseAuth();
    
     const handle = async () => {
       try {
         await googlesignin();
       } catch (error) {
         console.log(error);
       }
     };

   

    return (
      <Flex
        // height={"100%"}
        // bg={"black"}
        // // position={"absolute"}
        // top={"0"}
        // left={"0"}
        // width={"100%"}
        // zIndex={"99"}
        // // overflow={"hidden"}
        // // overflow={"auto"}
        // position={"fixed"}
        z-index={"10001"}
        // position={"relative"}
        background-color={"rgba(0, 0, 0, .65)"}
        position={"fixed"}
        // width={"100%"}
        height={" 100%"}
        top={"0"}
        left={"0"}
        // z-index={""}
        padding-left={"20px"}
        padding-right={"20px"}
        display={"flex"}
        flex-direction={"row"}
        justify-content={"center"}
        max-height={"650px"}
        width={"100%"}
        bg={"grey"}
        // marginBottom={"20px"}
      >
        <Stack
          spacing={2}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          //   marginBottom={"20px"}
          // height={"100vh"}
          // position={"relative"}
          // top={"0"}
          border={"1px solid red"}
        >
          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"black"}>Sign-Up</Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            h={"auto"}
            // marginBottom={"40px"}
            border={"1px solid red"}
            // position={"fixed"}
          >
            <Stack spacing={1}>
              
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder="enter your name" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="enter last name" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2} align={"center"}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  width={"250px"}
                >
                  Sign up
                </Button>
              </Stack>

              <Text align={"center"}>OR</Text>

              <Stack spacing={10} pt={2} align={"center"}>
                <GoogleButton
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handle}
                ></GoogleButton>
              </Stack>
              <Stack>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} to={"/login"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
}
