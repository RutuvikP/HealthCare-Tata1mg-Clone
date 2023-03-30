import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import AdminNav from "../../Components/AdminComponents/AdminNav";
import { getMultivitaminsData } from "../../redux/admin/admin.action";


const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const {multivitaminsData}= useSelector((store)=>store.adminReducer)
  
  useEffect(() => {
    dispatch(getMultivitaminsData());
  }, []);

  console.log(multivitaminsData,"multivitamins");

  const vitaProducts = multivitaminsData.length;
  const ayurvedaProducts = 210;
  const diabetesProducts = 159;



  return (
    <Box display="flex" w={"100%"} gap={0}>
      <Box width="20%">
        <AdminNav />
      </Box>
      <Stack
        width={["100%","100%" ,"100%" , "80%"]}
        marginTop={"60px"}
        marginLeft={"-30px"}
        pt={30}
        fontFamily={"sans-serif"}
        border="0px solid black"
      >
        <Stack
          bg={"white"}
          textAlign="center"
          padding="10px 0px"
          borderRadius={5}
          boxShadow={"base"}
          w="100%"
        >
          <Text fontSize={["18px" ,"20px","25px" ]} fontFamily={"sans-serif"} >
            Total Products : {vitaProducts + ayurvedaProducts + diabetesProducts}
          </Text>
        </Stack>
        <Box borderRadius={15} mt={10}>
          <Chart
            type="radialBar"
            height={450}
            series={[vitaProducts, ayurvedaProducts, diabetesProducts]}
            options={{
              noData: { text: "Unavailable" },
              stroke: {
                lineCap: "round",
              },
              radialBar: {
                 dataLabels: {
                total: {
                  show: true,
                  label: "TOTAL",
                },
                 }
              },
              labels: [
                "VITAMINS PRODUCTS",
                "AYURVEDA-PRODUCTS",
                "DIABETES-PRODUCTS",
              ],
            }}
          ></Chart>
        </Box>
        <HStack
          justifyContent={"center"}
          mt={10}
          pb={10}
          alignItems={"center"}
          spacing={3}
          display="flex"
          flexWrap="wrap"
          gap={7}
        >
          <Stack
            bg={"#00E396"}
            boxShadow={"base"}
            padding={8}
            borderRadius={15}
          >
            <Text fontWeight={"normal"} fontFamily={"sans-serif"}>
              {" "}
              Total Ayurdeva Products <b>{ayurvedaProducts}</b>
            </Text>
          </Stack>
          <Stack
            bg={"#FEB019"}
            padding={8}
            boxShadow={"base"}
            borderRadius={15}
          >
            <Text fontWeight={"normal"} fontFamily={"sans-serif"}>
              Total Diabetes Products <b>{diabetesProducts}</b>
            </Text>
          </Stack>
          <Stack
            bg={"#008FFB"}
            padding={8}
            boxShadow={"base"}
            borderRadius={15}
          >
            <Text fontWeight={"normal"} fontFamily={"sans-serif"}>
              Total MultiVitamins Products <b>{vitaProducts}</b>
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default AdminDashboardPage;

