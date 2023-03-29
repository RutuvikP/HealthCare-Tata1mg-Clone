import { Box, Radio, Text, Image, Select, Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";


import axios from "axios";
import CartCarousel from "./CartCarousel";

const Cart = () => {


  return (
    <>
    
      <Box height={"auto"} bg={"#F3F7FB"}>
        <Box flexWrap="wrap" p={5} width={"80%"} m={"auto"} height={"auto"} display={{base:"none",md:"grid"}}>
          <Text>Order Summary</Text>

          <Box display={"flex"}>
            <Box ml={-10} >
              <CartCarousel/>
            </Box>
            
          </Box>
        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{base:"repeat (2,1fr)",md:"repeat(1,1fr)"}}
          gap={8}
          mt={5}
         
         
          height={"auto"}
        >
          <Box bg={"white"} p={0} rounded={5} height={"auto"}  >
            <Text p={5} pb={0} fontSize={"lg"} color={"grey"} mb={0}>
              PRODUCTS
            </Text>
            
        

            <Box
              color={"teal"}
              justifyContent={"space-between"}
              display={"flex"}
              p={4}
            >
              <Text fontSize={"md"} fontWeight={500}>
                ADD MORE ITEMS
              </Text>
              <Link to="/">
                {" "}
                <AddIcon />
              </Link>
            </Box>
          </Box>

          <Box
            bg={"white"}
            rounded={"md"}
            p={5}
            pr={8}
           
            height={300}
           
          >
            <Text mb={1} color={"grey"} fontSize={"lg"}>
              PAYMENT DETAILS
            </Text>
            <Box
              fontSize={"md"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text> MRP Total</Text>
              <Text>Rs,{"bag"}</Text>
            </Box>
            <Box
              fontSize={"sm"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text> Medicine Hub Discount</Text>
              <Text>-Rs,75.00</Text>
            </Box>
            <Box
              fontSize={"md"}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text>Total Amount*</Text>
              <Text>Rs,{"discountedPrice"}</Text>
            </Box>
            <Box
              bg={"#F3F8EC"}
              p={2}
              fontWeight={500}
              fontSize={"smaller"}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text pl={4} color={"green"}>
                TOTAL SAVINGS Rs.75
              </Text>
            </Box>

            <Box
              p={2}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Box>
                <Text fontSize={"md"}>TOTAL AMOUNT</Text>
                <Text fontSize={"larger"}>Rs,{"discountedPrice"}</Text>
              </Box>
              <Box>
                <Link to="/checkout/payment-information">
                  {" "}
                  <Button size={"lg"}>PROCEED</Button>{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
