// import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
// import { UseAuth } from "";
import { useNavigate} from "react-router-dom";
import { UseAuth } from "./PagesMain/authfolderrr/Authcontext";
import emailjs from "@emailjs/browser";
import Carousel from "react-multi-carousel";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

// import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import "./Login.css"
import { useState } from "react";
;
const datatty = [
  {
    id: 1,
    img: "https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png",
    title: "Make HealthCare Simpler",
    caption:
      "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
  },
  // <div class="style__desc-wrapper___StUEL">Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.</div>
  {
    id: 2,
    img: "https://www.1mg.com/images/login-signup/Know-Your-Medicines.png",
    title: "Know Your Medicines",
    caption:
      "View medicine information like usage, side effects and cheaper substitutes before you take them.",
  },
  {
    id: 3,
    img: "https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png",

    title: "Medicines, Home Delivery",
    caption:
      "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
  },
  {
    id: 4,
    img: "https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png",
    title: "Lab Test at Home",
    caption:
      "Book any test from any lab. We'll collect the sample and send the reports. Save up to 80% every time.",
  },
  {
    id: 5,
    img: "https://www.1mg.com/images/login-signup/Health-Related-Queries.png",

    title: "Health Related Quries?",

    caption:
      "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
  },
];

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setpassword] = useState("")
  const [message, setmassage] = useState("")
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
 
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  

   const { isOpen, onOpen, onClose } = useDisclosure();
  
  

  
   
  const { googlesignin, user } = UseAuth();
 
  const handle = async () => {
    try {
      await googlesignin();
    } catch (error) {
      console.log(error);
    }
  };
//  let p=[]
  const handleclick = () => {
    // e.preventDefault()
     
     // console.log(all)
  // console.log("jdfs");
     const initData = {
       firstname,
       lastname,
       email,
       password,
      
     };
   
    fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(initData),
    })
      .then((res) => res.json())
      .then((res) => {
         toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          position: "top",
          isClosable: true,
        });
        navigate("/login");
        onClose();
      } )
      .catch((err) => {
         if (err.response.data === "User Already Registered") {
          toast({
            title: "User Already Exist",
            status: "error",
            duration: 4000,
            position: "top",
            isClosable: true,
          });
        } else {
          console.log(err.response);
        }
      });
  }
  
  const valida = () => {
   const regExpress =
     /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
   if (password === "") {
     setmassage("Please enter a password.");
   } else if (!regExpress.test(password)) {
     setmassage(
       "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one special character."
     );
   } else if (regExpress.test(password)) {
    handleclick()
   }
   else {
     setmassage("");
   }
}


  // useEffect(() => {
  //   if (user != null) {
  //     navigate("/cart");
  //   }
  // }, []);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
}
  return (
    <div
      style={{ width: "100%", border: "5px solid blue" }}
      className="loginwercv"
    >
      <div className="loginpagecss">
        <div className="leftdfghjk" style={{ marginBottom: "100px" }}>
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
            containerClass="carousel-container"
          >
            {datatty.map((data, id) => (
              <div key={id} className="insidecarosa">
                <div className="leftimgggkl">
                  <img src={data.img} alt="banner" key={id} />
                </div>
                <div className="h1hhh11">
                  <p1>{data.title}</p1>
                </div>
                <div className="ppppwerty">
                  <p1>{data.caption}</p1>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div class="style__auth-wrapper___2Z5D3">
          <div class="container">
            <h1 style={{ fontSize: "20px", color: "black" }}>
              Signup Your Page
            </h1>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              // boxShadow={"lg"}
              p={8}
              h={"auto"}
              // spacing={4}
            >
              <Stack>
                <HStack spacing={8}>
                  <Box spacing={8}>
                    <FormControl id="firstName" marginBottom={"20px"}>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="enter first name"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" marginBottom={"20px"}>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="enter last name"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" marginBottom={"20px"}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" marginBottom={"20px"}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <div
                  style={{
                    textAlign: "left",
                    color: "red",
                    marginBottom: "20px",
                  }}
                >
                  {message}
                </div>
                <Stack spacing={4} pt={2} align={"center"}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    width={"300px"}
                    onClick={valida}
                  >
                    Sign up
                  </Button>
                </Stack>

                <Text align={"center"}>OR</Text>

                <Stack spacing={10} pt={2} align={"center"}>
                  <GoogleButton
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={handle}
                  ></GoogleButton>
                </Stack>
                <Stack>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link color={"blue.400"} href="/login">
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

