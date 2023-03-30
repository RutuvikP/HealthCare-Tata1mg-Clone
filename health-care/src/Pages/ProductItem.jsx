import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "@chakra-ui/icons";

function ProductItem({ ...el }) {
  return (
    <Box
      p={4}
      boxShadow={
        " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    >
      <img style={{ margin: "auto" }} src={el.img} alt="product_image" />
      <Text fontSize="lg">
        Title: <b>{el.title} </b>
      </Text>
      <Text fontSize="md">
        Brand: <b>{el.brand}</b>
      </Text>
      <Text fontSize="md">
        Price: <b>₹{el.price}</b>
      </Text>
      <Text fontSize="sm">
        Rating:
        <b>
          {el.rating} <StarIcon />
        </b>
      </Text>
    </Box>
  );
}

export default ProductItem;
