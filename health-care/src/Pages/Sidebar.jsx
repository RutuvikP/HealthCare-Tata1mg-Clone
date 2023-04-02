//Sidebar.jsx
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function Sidebar() {
  const { total } = useSelector((store) => store.productReducer);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  //console.log(initialBrand);
  const [brand, setBrand] = useState(initialBrand || []);
  const [order, setOrder] = useState("");
  const getCurrentPage = (page) => {
    page = Number(page);

    if (typeof page !== "number" || page <= 0 || !page) {
      return 1;
    }
    return page;
  };
  const [page, setPage] = useState(getCurrentPage(searchParams.get("page")));

  const handleChange = (e) => {
    let newBrand = [...brand];
    const val = e.target.value;
    if (newBrand.includes(val)) {
      newBrand = newBrand.filter((el) => el !== val);
    } else {
      newBrand.push(val);
    }
    setBrand(newBrand);
  };

  const handleSort = (e) => {
    //console.log(e);
    setOrder(e);
  };

  const handleClick = (val) => {
    setPage((prev) => prev + val);
  };

  useEffect(() => {
    const params = {
      brand,
    };
    order && (params.order = order);
    page && (params.page = page);
    //params.sort?
    setSearchParams(params);
  }, [brand, order, page]);

  return (
    <Box
      w={"210px"}
      p={5}
      boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      gap={3}
      m={"auto"}
    >
      <Box borderBottom={"1px solid grey"} textAlign={"left"}>
        <Text>
          <b>Filter by brand</b>
        </Text>
        <Input placeholder="search" mb={3} />
        <Checkbox
          value="Tata"
          onChange={handleChange}
          isChecked={brand.includes("Tata")}
        >
          Tata
        </Checkbox>
        <br />
        <Checkbox
          value="Revital"
          onChange={handleChange}
          isChecked={brand.includes("Revital")}
        >
          Revital
        </Checkbox>
        <br />
        <Checkbox
          value="Vicks"
          onChange={handleChange}
          isChecked={brand.includes("Vicks")}
        >
          Vicks
        </Checkbox>
        <br />
        <Checkbox
          value="Wellman"
          onChange={handleChange}
          isChecked={brand.includes("Wellman")}
        >
          Wellman
        </Checkbox>
        <br />
        <Checkbox
          value="Healthkart"
          onChange={handleChange}
          isChecked={brand.includes("Healthkart")}
        >
          Healthkart
        </Checkbox>
        <br />
        <Checkbox
          value="Wellbeing"
          onChange={handleChange}
          isChecked={brand.includes("Wellbeing")}
        >
          Wellbeing
        </Checkbox>
        <br />
        <Checkbox
          value="Muscleblaze"
          onChange={handleChange}
          isChecked={brand.includes("Muscleblaze")}
        >
          Muscleblaze
        </Checkbox>
        <br />
        <Checkbox
          value="Carbamide Forte"
          onChange={handleChange}
          isChecked={brand.includes("Carbamide Forte")}
        >
          Carbamide Forte
        </Checkbox>
        <br />
        <Checkbox
          value="Zincovit"
          onChange={handleChange}
          isChecked={brand.includes("Zincovit")}
        >
          Zincovit
        </Checkbox>
        <br />
        <Checkbox
          value="Supryadyn"
          id=""
          onChange={handleChange}
          isChecked={brand.includes()}
        >
          Supradyn
        </Checkbox>
        <br />
        <Checkbox
          value="A to Z"
          id=""
          onChange={handleChange}
          isChecked={brand.includes()}
        >
          A to Z
        </Checkbox>
        <br />
        <Checkbox
          value="Zeroharm"
          id=""
          onChange={handleChange}
          isChecked={brand.includes()}
        >
          Zeroharm
        </Checkbox>
      </Box>

      <Box mt={"2"} mb={"2"}>
        <Text mb={3}>
          <b> Sort by Price</b>
        </Text>
        <RadioGroup onChange={handleSort}>
          <Stack>
            <Radio value="desc">High to Low</Radio>
            <Radio value="asc">Low to High</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Flex gap={2}>
        <Button
          colorScheme={"blue"}
          isDisabled={page === 1}
          onClick={() => handleClick(-1)}
        >
          Prev
        </Button>
        <Button colorScheme={"blue"} isDisabled>
          {page}
        </Button>
        <Button
          colorScheme={"blue"}
          isDisabled={page === Math.ceil(total / 8)}
          onClick={() => handleClick(1)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default Sidebar;
