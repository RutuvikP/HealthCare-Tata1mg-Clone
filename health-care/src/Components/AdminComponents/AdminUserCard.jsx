import {
    AvatarBadge,
    Box,
    Card,
    CardHeader,
    Flex,
    Heading,
    Button,
    IconButton,
    CardBody,
    Divider,
    CardFooter,
    Avatar,
  } from "@chakra-ui/react";
  import React from "react";
  import {
    AiOutlineShoppingCart,
    AiOutlineDelete,
    AiOutlineMail,
  } from "react-icons/ai";
  import {
    BsRecord2,
    BsThreeDotsVertical,
  } from "react-icons/bs";


  const AdminUserCard = () => {
    
    return (
      <>
        <Card maxW="4xl" paddingX={3} boxShadow="md" w="100%" border={'1px solid #BEE3F8'} mb={50}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                {/* {isLogged ? (
                  <Avatar name={`Rutuvik`} size={"lg"}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                  </Avatar>
                ) : (
                  <Avatar name={`Login`} size={"lg"}>
                    <AvatarBadge boxSize="1em" bg="red.500" />
                  </Avatar>
                )} */}
                <Avatar name={`Rutuvik`} size={"lg"}>
                    <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
                <Box textAlign={"left"}>
                  <Heading ml={4} size="md" fontWeight={"semibold"}>
                    Rutuvik
                  </Heading>
                  <Button
                    fontSize={18}
                    fontWeight={"normal"}
                    bg={"none"}
                    leftIcon={<AiOutlineMail />}
                  >
                    {" "}
                    rutuvikpatil@gmail.com
                  </Button>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody></CardBody>
          <Divider />
          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "146px",
                maxW: "160px",
              },
            }}
          >
            <Button
              flex="1"
              _hover={{ color: "black", backgroundColor: "yellow.500" }}
              variant="ghost"
              leftIcon={<AiOutlineShoppingCart />}
            >
              Cart : 2
            </Button>
            <Button
              flex="1"
              _hover={{ color: "black", backgroundColor: "yellow.500" }}
              variant="ghost"
              leftIcon={<BsRecord2 />}
            >
              Order
            </Button>
            <Button
              flex="1"
              _hover={{ color: "black", backgroundColor: "yellow.500" }}
              variant="ghost"
              leftIcon={<AiOutlineDelete />}
            >
            </Button>
          </CardFooter>
        </Card>
      </>
    );
  };
  
  export default AdminUserCard;
  