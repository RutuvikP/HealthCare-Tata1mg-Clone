import {
  Box,
  Checkbox,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Sidebar() {
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
        <Checkbox name="tata" id="">
          Tata
        </Checkbox>
        <br />
        <Checkbox name="revital" id="">
          Revital
        </Checkbox>
        <br />
        <Checkbox name="vicks" id="">
          Vicks
        </Checkbox>
        <br />
        <Checkbox name="wellman" id="">
          Wellman
        </Checkbox>
        <br />
        <Checkbox name="healthkart" id="">
          Healthkart
        </Checkbox>
        <br />
        <Checkbox name="wellbeing" id="">
          Wellbeing
        </Checkbox>
        <br />
        <Checkbox name="muscleblaze" id="">
          Muscleblaze
        </Checkbox>
        <br />
        <Checkbox name="carbamide" id="">
          Carbamide Forte
        </Checkbox>
        <br />
        <Checkbox name="zincovit" id="">
          Zincovit
        </Checkbox>
        <br />
        <Checkbox name="supryadyn" id="">
          Supradyn
        </Checkbox>
        <br />
        <Checkbox name="a-to-z" id="">
          A to Z
        </Checkbox>
        <br />
        <Checkbox name="zeroharm" id="">
          Zeroharm
        </Checkbox>
      </Box>

      <Box mt={"2"} mb={"2"}>
        <Text mb={3}>
          <b> Sort by Price</b>
        </Text>
        <RadioGroup>
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
