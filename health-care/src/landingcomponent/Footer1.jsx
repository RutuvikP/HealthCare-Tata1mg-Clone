
import {
  Divider,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { AccordionIcon } from "@chakra-ui/react";

import React from "react";

function Footer1() {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple bg={"white"}>
        <AccordionItem px={"5"} py="2">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Know more about Pharmony +
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4}>
            <Divider mb={"3"}></Divider>

            <Text mb={"2"} fontWeight={"bold"} fontSize={"20"}>
              Access medical and health information
            </Text>

            <Text mb={"6"}>
              {" "}
              Pharmony + provides you with medical information which is curated,
              written and verified by experts, accurate and trustworthy. Our
              experts create high-quality content about medicines, diseases, lab
              investigations, Over-The-Counter (OTC) health products, Ayurvedic
              herbs/ingredients, and alternative remedies.
            </Text>

            {/* ---------------------------------------------------------------------------------------------------------------------------- */}

            <Text mb={"2"} fontWeight={"bold"} fontSize={"20"}>
              Order medicines online
            </Text>

            <Text mb={"6"}>
              Get free medicine home delivery in over 1800 cities across India.
              You can also order Ayurvedic, Homeopathic and other
              Over-The-Counter (OTC) health products. Your safety is our top
              priority. All products displayed on Pharmony + are procured from
              verified and licensed pharmacies.
            </Text>

            {/* ----------------------------------------------------------------------------------------------------------------------------- */}

            <Text mb={"2"} fontWeight={"bold"} fontSize={"20"}>
              Book lab tests
            </Text>

            <Text mb={"6"}>
              Book any lab tests and preventive health packages from certified
              labs and get tested from the comfort of your home. Enjoy free home
              sample collection, view reports online and consult a doctor online
              for free.
            </Text>

            {/* -------------------------------------------------------------------------------------------------------------------------------- */}

            <Text mb={"2"} fontWeight={"bold"} fontSize={"20"}>
              Consult a doctor online
            </Text>

            <Text mb={"6"}>
              Got a health query? Consult doctors online from the comfort of
              your home for free. Chat privately with our registered medical
              specialists to connect directly with verified doctors. Your
              privacy is guaranteed.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Footer1;
