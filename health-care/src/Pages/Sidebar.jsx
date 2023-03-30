//Sidebar.jsx
import {
  Box,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  //console.log(initialBrand);
  const [brand, setBrand] = useState(initialBrand || []);
  const [order, setOrder] = useState("");

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
  useEffect(() => {
    const params = {
      brand,
    };
    order && (params.order = order);
    //params.sort?
    setSearchParams(params);
  }, [brand, order]);

  return (
    <Box
      w={"170px"}
      p={5}
      boxShadow={
        " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
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
    </Box>
  );
}

export default Sidebar;
