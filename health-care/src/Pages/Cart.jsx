import {
  Box,
  Radio,
  Text,
  Image,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";



import axios from "axios";
import { changeQuantityAction, deleteAction, getDataAction } from "../redux/cartReducer/action";
// import CartCarousel from "./CartCarousel";

const Cart = () => {
  let dispatch = useDispatch();
  let { cart,total } = useSelector((state) => state.cartReducer);
  useEffect(() => {
    dispatch(getDataAction);
  }, []);
  let handleDelete = (id) => {
    dispatch(deleteAction(id));
  };
  let handleSelect = (value,id) => {
    dispatch(changeQuantityAction(value,id))
  };
  return (
    <>
      <Box height={"auto"} bg={"#F3F7FB"}>
        <Box
          flexWrap="wrap"
          p={5}
          width={"80%"}
          m={"auto"}
          height={"auto"}
          display={{ base: "none", md: "grid" }}
        >
          <Text>Order Summary</Text>

        </Box>

        <Box
          display={"grid"}
          gridTemplateColumns={{ base: "repeat (2,1fr)", md: "repeat(1,1fr)" }}
          gap={8}
          mt={5}
          height={"auto"}
        >
          <Box bg={"white"} p={0} rounded={5} height={"auto"}>
            <Text p={5} pb={0} fontSize={"lg"} color={"grey"} mb={0}>
              PRODUCTS
            </Text>
            {cart.map((el) => (
              <Box
                key={el.id}
                fontSize={"md"}
                display={"flex"}
                height={"auto"}
                lineHeight={6}
                borderBottom={"1px solid grey"}
                p={3}
              >
                <Box>
                  <Image height={"60%"} ml={40} mr={20} mt={5} src={el.img} alt="" />
                </Box>
                <Box>
                  <Text fontSize={"md"} fontWeight={500}>
                    {el.title}
                  </Text>
                  <Text fontSize={"small"} color={"green"}>
                    Only 6 Left In Stock
                  </Text>
                  <Text fontSize={"small"} as={"i"}>
                    Mfr:{el.brand}
                  </Text>
                  <Box display={"flex"} gap={80}>
                    <Text
                      fontSize={"md"}
                      color={"#ff6f61"}
                      fontWeight={500}
                      pt={2}
                    >
                      RS.{Number(el.price) * el.quantity}.00
                    </Text>
                    <Select
                      height={8}
                      mb={6}
                      width={40}
                      onChange={(e) => handleSelect(e.target.value, el.id)}
                    >
                    <option>quantity: {el.quantity}</option>
                      <option value="1">quantity: 1</option>
                      <option value="2">quantity: 2</option>
                      <option value="3">quantity: 3</option>
                      <option value="4">quantity: 4</option>
                      <option value="5">quantity: 5</option>
                      <option value="6">quantity: 6</option>
                    </Select>
                  </Box>
                  <Box display={"flex"}>
                    <Box pr={2} borderRight={"1px solid grey"}>
                      <Text> Delivery between Nov 11 6PM-Nov 18 10PM </Text>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => handleDelete(el.id)}
                        bg={"#F6F6F7"}
                        mr={0}
                        ml={3}
                        mt={3}
                        size={"sm"}
                        color={"red"}
                      >
                        REMOVE
                      </Button>
                      
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}

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
                <AddIcon/>
              </Link>
            </Box>
          </Box>

          <Box bg={"white"} rounded={"md"} p={5} pr={8} height={300}>
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
              <Text>Rs,{total}</Text>
            </Box>
           
            <Box
              fontSize={"md"}
              fontWeight={500}
              mt={3}
              justifyContent={"space-between"}
              display={"flex"}
            >
              <Text>Total Amount*</Text>
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
              </Box>
              <Box>
                <Link to="/checkout/payment-information">
                  {" "}
                  <Button style={{backgroundColor:"#ff6f61", color:"white",}} size={"lg"}>CHECKOUT</Button>{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export {Cart}
