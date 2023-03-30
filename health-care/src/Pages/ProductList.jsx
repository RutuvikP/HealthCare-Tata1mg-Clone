import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productReducer/action";
import ProductItem from "./ProductItem";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useLocation, useSearchParams } from "react-router-dom";
import { Dna } from "react-loader-spinner";

function ProductList() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, isLoading } = useSelector((store) => store.productReducer);

  //console.log(location.search);
  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      _sort: "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(obj));
  }, [location.search]);
  //console.log(searchParams.getAll("brand"));
  console.log(products);
  //console.log(products);
  return (
    <Flex>
      <Box pl={10} mt={20}>
        <Sidebar />
      </Box>

      <Box>
        <Text fontSize="2xl">Multivitamins</Text>
        {isLoading ? (
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        ) : (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} margin={10}>
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
