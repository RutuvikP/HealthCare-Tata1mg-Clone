import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import ProductItem from "./ProductItem";
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(products);
  return (
    <Flex>
      <Box pl={10} mt={20}>
        <Sidebar />
      </Box>

      <Box>
        <Text fontSize="2xl">Multivitamins</Text>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} margin={10}>
          {products.map((el, i) => (
            <ProductItem key={i} {...el} />
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export default ProductList;
