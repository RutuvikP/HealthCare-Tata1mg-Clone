import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  border,
  Center,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { addToCart } from "../redux/productReducer/action";
import axios from "axios";

function SingleProductPage() {
  const toast = useToast();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.productReducer);
  const [el] = products.filter((i) => {
    return i.id === +id;
  });

  const handleClick = (el) => {
    const newObj = { ...el, ["quantity"]: 1 };
    toast({
      title: "Product Added",
      description: "We've added your product to cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    fetch(`https://poised-red-shrimp.cyclic.app/cart`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //console.log(newObj);
  };
  //console.log(el);
  return (
    <Container
      maxW={"xl"}
      m={{
        base: "20px auto 20px",
        sm: "20px auto 20px",
        md: "20px auto 20px",
        lg: "20px auto 20px",
      }}
      //border="1px solid black"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
      h={"auto"}
      borderRadius={"10px"}
      //   h={{ base: "100%", sm: "600px", md: "400px", lg: "auto" }}
    >
      <SimpleGrid
        columns={{ base: 1 }}
        gap={"none"}
        //spacing={{ base: 1, md: 2, lg: "none" }}
        spacing={"none"}
        py={{ base: 4, md: "none", lg: "none" }}
      >
        <Center>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={el.img}
            // fit={"cover"}
            //align={"center"}
            w={"50%"}
            h={{ base: "220px", sm: "300px", md: "300px" }}
            //border="1px solid red"
          />
        </Center>
        <Stack spacing={{ base: 2, md: 1 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
              //border="1px solid red"
              p={"10px"}
            >
              {el.title}
            </Heading>
            <Text
              //color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={400}
              fontSize={["xs", "xl", "2xl", "3xl"]}
              //border="1px solid red"
              p={2}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              }
              w={"20%"}
              m={"auto"}
              borderRadius={"50%"}
              color="green"
            >
              ₹{el.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 2, sm: 1, lg: 1 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
            //border={"1px solid red"}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"md"}
                fontWeight={"600"}
                // p={"10px"}
              >
                {el.description}
              </Text>
            </VStack>

            <Box gap={1} border={"1px solid black"}>
              <Center
                // justifyContent={"center"}
                alignItems="center"
                gap="2"
                //border={"1px solid black"}
              >
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  //textTransform={"uppercase"}
                  mb={"4"}
                >
                  Rating:
                </Text>

                <Text
                  textTransform={"uppercase"}
                  fontWeight={"500"}
                  alignItems={"center"}
                  color={"green"}
                >
                  {" "}
                  {el.rating}★{" "}
                </Text>
              </Center>
              <Center gap="4">
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  //textTransform={"uppercase"}
                  mb={"4"}
                >
                  Brand:
                </Text>
                <Text
                  textTransform={"uppercase"}
                  fontWeight={"500"}
                  color={"green"}
                >
                  {el.brand}
                </Text>
              </Center>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => handleClick(el)}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default SingleProductPage;
