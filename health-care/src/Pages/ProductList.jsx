import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import ProductItem from "./ProductItem";
import { Box, Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useLocation, useSearchParams } from "react-router-dom";
import { Dna } from "react-loader-spinner";

function ProductList() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, isLoading } = useSelector((store) => store.productReducer);

  
  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      _sort: "price",
      _order: searchParams.get("order"),
      _page: searchParams.get("page"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);
  
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      maxWidth={"98%"}
      margin="auto"
    >
      <Box
        justifyContent={"center"}
        
        mt={{ md: "130px", lg: "130px", sm: "none", base: "none" }}
      >
        <Sidebar />
      </Box>

      <Box width={"auto"}>
        <Text fontSize="4xl">Multivitamins</Text>
        {isLoading ? (
          <Center marginTop={"200px"}>
            <Dna
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </Center>
        ) : (
          <SimpleGrid columns={[1, 2, 2, 4]} gap={'50px'} spacing={10} margin={10}>
            {products.map((el, i) => {
              return <ProductItem key={i} {...el} />;
            })}
          </SimpleGrid>
        )}
      </Box>
    </Flex>
  );
}

export default ProductList;
