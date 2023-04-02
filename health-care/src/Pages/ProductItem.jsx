import { Box, Button, Center, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function ProductItem({ ...el }) {
  // useEffect(() => {
  //   console.log(id);
  // });
  const toast = useToast();
  const handleClick = (el) => {
    toast({
      title: "Product Added",
      description: "We've added your product to cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    const newObj = { ...el, ["quantity"]: 1 };
    axios
      .post(`https://poised-red-shrimp.cyclic.app/cart`, newObj)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <Box
      display={"grid"}
      gap={"5"}
      p={4}
      boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    >
      <Link to={`/product/${el.id}`}>
        <Box>
          <Box h={"150px"} display="grid" alignItems={"center"}>
            <img style={{ margin: "auto" }} src={el.img} alt="product_image" />
          </Box>
          <Box>
            <Text fontSize="lg">
              <i>{el.title.substring(0, 20).concat("...")}</i>
            </Text>

            <Text fontSize="md">
              Brand:{" "}
              <b>
                <i>{el.brand}</i>
              </b>
            </Text>

            <Text fontSize="sm" color="green">
              Rating:
              <b>
                {" "}
                <i>{el.rating}</i> ★
              </b>
            </Text>
            <Text fontSize="md" color={"cyan.700"}>
              Price:{" "}
              <i>
                {" "}
                <b>₹{el.price}</b>
              </i>
            </Text>
          </Box>
        </Box>
      </Link>
      <Button onClick={() => handleClick(el)} bg={"green.200"} color="cyan.900">
        Add to cart
      </Button>
    </Box>
  );
}

export default ProductItem;
