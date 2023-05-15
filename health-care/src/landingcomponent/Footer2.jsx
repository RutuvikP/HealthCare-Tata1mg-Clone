

import React from "react";

import {
  Button,
  InputGroup,
  InputLeftAddon,
  Input,
  Divider,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Box,
  Image,
  Stack,
  GridItem,
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import Footer1 from "./Footer1";



function Footer2() {
  return (
    <Box border={""} bg={"white"}>
      <Divider mb="20px"></Divider>

      <VStack borderBottom={"1px solid gray"} margin={"auto"} w="90%">
        <Text mb="30px" fontSize={[21, 22, 23, 24]} textAlign="center">
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Text>

        <HStack
          w={{ base: "100%", "426px": "80%", "602px": "60%" }}
          justify={"space-between"}
          flexDirection={{ base: "column", "378px": "row" }}
        >
          <Stack
            pb={6}
            display={"flex"}
            flexDirection="column"
            align={"center"}
          >
            <Text fontSize={["20", "23", "25", "27", "30"]} fontWeight={"bold"}>
              260 M +
            </Text>

            <Text fontSize={"17"}>Visitors</Text>
          </Stack>

          <Stack
            pb={6}
            mb={"6"}
            display={"flex"}
            flexDirection="column"
            align={"center"}
          >
            <Text fontSize={["20", "23", "25", "27", "30"]} fontWeight={"bold"}>
              31 M +
            </Text>

            <Text fontSize={"17"}>Orders Delivered</Text>
          </Stack>

          <Stack
            pb={6}
            display={"flex"}
            flexDirection="column"
            align={"center"}
          >
            <Text fontSize={["20", "23", "25", "27", "30"]} fontWeight={"bold"}>
              1800 +
            </Text>

            <Text fontSize={"17"}>Cities</Text>
          </Stack>
        </HStack>
      </VStack>


      <HStack
        p=" 5"
        align={"center"}
        justify="center"
        flexDirection={{ base: "column", "727px": "row" }}
      >
        <Text mt={"6"} mr="3" mb="6" textAlign={"center"}>
          Get the link to download App
        </Text>

        <HStack>
          <InputGroup mr="2">
            <InputLeftAddon children="+ 91" />
            <Input type="tel" placeholder="Enter Phone Number" />
          </InputGroup>

          <Button
            w="100px"
            px="10"
            size={{ base: "sm", "533px": "md" }}
            variant={"none"}
            _hover={useColorModeValue(
              { backgroundColor: "blue.500" },
              { backgroundColor: "rgb(35, 184, 144)", color: "white" }
            )}
            bg={useColorModeValue("blue.300", "rgb(0, 255, 187)")}
            color="black"
          >
            Send Link
          </Button>
        </HStack>
      </HStack>

      <Divider></Divider>

      <Box
       bg={"white"}
      >
        <HStack
          flexDirection={{ base: "column", "1065px": "row" }}
          justify={"center"}
          p={"40px"}
        >
          <SimpleGrid
            mt="23px"
            mb={{ base: "20px", "881px": "0px" }}
            columns={{ base: "1", "550px": "2", "881px": "4" }}
            w={{ "550px": "80%", "665px": "70%", "881px": "100%" }}
          >
            <GridItem
              display={"flex"}
              flexDirection="column"
              alignItems={{ base: "center", "550px": "baseline" }}
              mb="40px"
            >
              <Text mb={"19px"} fontSize={"18"} fontWeight={"bold"}>
                Know Us
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                About Us
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Contact Us
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Press Coverage
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Careers
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Business Partnership
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Become a Health Partner
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Corporate Governance
              </Text>
            </GridItem>

           

            <GridItem
              display={"flex"}
              flexDirection="column"
              alignItems={{ base: "center", "550px": "baseline" }}
              mb="40px"
            >
              <Text mb={"19px"} fontSize={"18"} fontWeight={"bold"}>
                Our Policies
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Privacy Policy
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Terms and Conditions
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Editorial Policy
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Return Policy
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                IP Policy
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Grievance Redressal Policy
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Fake Jobs and Fraud Disclaimer
              </Text>
            </GridItem>

            
            <GridItem
              display={"flex"}
              flexDirection="column"
              alignItems={{ base: "center", "550px": "baseline" }}
              mb="40px"
            >
              <Text mb={"19px"} fontSize={"18"} fontWeight={"bold"}>
                Our Services
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Order Medicines
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Book Lab Tests
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Consult a Doctor
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Ayurveda Articles
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Hindi Articles
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"14"}
              >
                Care Plan
              </Text>
            </GridItem>

          

            <GridItem
              display={"flex"}
              flexDirection="column"
              alignItems={{ base: "center", "550px": "baseline" }}
              mb="40px"
              bg={"white"}
            >
              <Text mb={"19px"} fontSize={"18"} fontWeight={"bold"}>
                Connect
              </Text>

              <Text
                mb={"6px"}
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"16"}
              >
                Social Links
              </Text>

              

              <HStack mt="5px">
                <Image
                  w="25px"
                  src="https://onemg.gumlet.io/vqpr5zx9ofpsyafjwwin.svg"
                ></Image>

                <Image
                  w="23px"
                  src="https://onemg.gumlet.io/wwynoy59i3iakt8te5xl.svg"
                ></Image>

                <Image
                  w="25px"
                  src="https://onemg.gumlet.io/cwrpdmlzckwzvv9e1gjv.svg"
                ></Image>

                <Image
                  w="23px"
                  src="https://onemg.gumlet.io/tywtfwyzxb8ujnqmbuau.svg"
                ></Image>

                <Image
                  w="23px"
                  src="https://onemg.gumlet.io/hqfglkzkfxaxaypniixn.svg"
                ></Image>
                <Image
                  w="23px"
                  src="https://onemg.gumlet.io/ny7nk9wxxlcxpeh1jbgg.svg"
                ></Image>
              </HStack>

              <Text
                mt={"5px"}
                mb="5px"
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={"16"}
              >
                Want daily dose of health?
              </Text>

              <Button
                w="100px"
                px="10"
                size={{ base: "sm", "533px": "md" }}
                variant={"none"}
                _hover={useColorModeValue(
                  { backgroundColor: "blue.500" },
                  { backgroundColor: "rgb(35, 184, 144)", color: "white" }
                )}
                bg={useColorModeValue("blue.300", "rgb(0, 255, 187)")}
                color="black"
              >
                SIGN UP
              </Button>
            </GridItem>
          </SimpleGrid>


          <Stack>
            <Text mb="3">Download App</Text>

            <Image
              w="140px"
              borderRadius={"10px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcE5M9HdfW4eEdcoUypdO7zr2iyb8pmYMOA&usqp=CAU"
            ></Image>
          </Stack>
        </HStack>

        

        <HStack
          justify={"space-between"}
          flexDirection={{ base: "column", "1072px": "row" }}
          borderTop={"1px solid gray"}
          py="50px"
          borderBottom={"1px solid gray"}
          w="85%"
          m="auto"
        >
          <HStack
            pb={{ base: "10", "1072px": "0" }}
            flexDirection={{ base: "column", "394px": "row" }}
            px="8"
            w={{ base: "100%", "1072px": "400px" }}
          >
            <Image src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"></Image>

            <Stack>
              <Text letterSpacing={"1px"} fontSize={"26"} fontWeight="bold">
                Reliable
              </Text>

              <Text fontSize={"12"}>
                All products displayed on Pharmony + are procured from verified
                and licensed pharmacies. All labs listed on the platform are
                accredited
              </Text>
            </Stack>
          </HStack>

         

          <HStack
            pb={{ base: "10", "1072px": "0" }}
            flexDirection={{ base: "column", "394px": "row" }}
            px="8"
            w={{ base: "100%", "1072px": "400px" }}
          >
            <Image src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"></Image>

            <Stack>
              <Text letterSpacing={"1px"} fontSize={"26"} fontWeight="bold">
                Secure
              </Text>

              <Text fontSize={"12"}>
                Pharmony + uses Secure Sockets Layer (SSL) 128-bit encryption
                and is Payment Card Industry Data Security Standard (PCI DSS)
                compliant
              </Text>
            </Stack>
          </HStack>

         

          <HStack
            pb={{ base: "10", "1072px": "0" }}
            flexDirection={{ base: "column", "394px": "row" }}
            px="8"
            w={{ base: "100%", "1072px": "400px" }}
          >
            <Image src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"></Image>

            <Stack>
              <Text letterSpacing={"1px"} fontSize={"26"} fontWeight="bold">
                Affordable
              </Text>

              <Text fontSize={"12"}>
                Find affordable medicine substitutes, save up to 50% on health
                products, up to 80% off on lab tests and free doctor
                consultations.
              </Text>
            </Stack>
          </HStack>
        </HStack>

        <VStack p="10">
          <HStack mb="5">
            <Image
              mr={"8"}
              w={{ base: "70px", "342px": "100px" }}
              src="https://static.legitscript.com/seals/729605.png"
            ></Image>

            <Image
              w={{ base: "70px", "342px": "100px" }}
              src="https://onemg.gumlet.io/URS_ebgmxc.png"
            ></Image>
          </HStack>

          <Text textAlign={"center"} fontWeight={"bold"}>
            India's only LegitScript and ISO/ IEC 27001 certified online
            healthcare platform
          </Text>
        </VStack>

        <Footer1 />

       

        <HStack
          flexDirection={{ base: "column", "1058px": "row" }}
          px={"5"}
          py="2"
        >
          <Text mb={{ base: "5", "1058px": "0" }} w="90%" textAlign={"center"}>
            {" "}
            © 2023 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
            process requests for Schedule X and other habit forming drugs.
          </Text>

          <HStack>
            <Image w="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHJJTdRCf3REVVx7AP2DAkc5K7rbQ5mahRA&usqp=CAU" alt=""></Image>

           
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Footer2;
