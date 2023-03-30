import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

function ProductItem({ ...el }) {
  return (
    <Box
      display={"grid"}
      gap={"5"}
      p={4}
      boxShadow={
        " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    >
      <img style={{ margin: "auto" }} src={el.img} alt="product_image" />
      <Box>
        <Text fontSize="lg">
          <i>{el.title.substring(0, 20).concat("...")}</i>
        </Text>
        <Text fontSize="md">
          Brand:
          <b>
            <i>{el.brand}</i>
          </b>
        </Text>
        <Text fontSize="sm" color="green">
          Rating:
          <b>
            {" "}
            <i>{el.rating}</i>{" "}
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
      <Button bg={"green.200"} color="cyan.900">
        Add to cart
      </Button>
    </Box>
  );
}

export default ProductItem;
