import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Badge,
} from '@chakra-ui/react';
import {  Spacer } from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import hlcarelogo from './images/logo.png';
// import { useNavigate } from 'react-router-dom'
import { UseAuth } from "./authfolderrr/Authcontext";
import { useSelector } from 'react-redux';

export default function Navbar() {
 
    const { logout, user } = UseAuth();
    const handlenav = async () => {
      try {
        await logout();
      } catch (error) {
        console.log("nma");
      }
  };
   const { isOpen, onToggle } = useDisclosure();
  // const navigate=useNavigate();
  const cart=useSelector((store)=>store.cartReducer.cart)
  return (
    <Box mb={"10px"}>
      <Flex
        bg={useColorModeValue("black", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color={"red"} w={3} h={3} />
              ) : (
                <HamburgerIcon color={"white"} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("white", "white")}
          >
            <Button
              as={"a"}
              fontSize={"md"}
              fontWeight={"bold"}
              variant={"link"}
              color={"white"}
              href={"/"}
            >
              <Image w={"100px"} src={hlcarelogo} h={"50px"} />
            </Button>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"md"}
            fontWeight={"bold"}
            variant={"link"}
            color={"white"}
            href={"/cart"}
          >
            Cart 🛒 {cart.length!==0?<Badge fontWeight={'bold'} colorScheme={'orange'} borderRadius={'50%'}>{cart.length}</Badge>:null}
          </Button>

          <Flex>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("white", "white")}
            >
              {" "}
              {user?.displayName}
            </Text>

            <Box
              as={"a"}
              fontWeight={"bold"}
              variant={"link"}
              color={"white"}
              textAlign={useBreakpointValue({ base: "center" })}
              m={7}
              bg="tomato"
              ml={3}
             
            >
              {user && (
                <Image
                  w={"60px"}
                  src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png"
                  h={"30px"}
                />
              )}
            </Box>
          </Flex>
          <Box
            as={"a"}
            fontWeight={"bold"}
            variant={"link"}
            color={"white"}
            textAlign={useBreakpointValue({ base: "center" })}
            mt={5}
          >
            {user?.displayName ? (
              <Button mt={5} onClick={handlenav}>
                logout
              </Button>
            ) : (
              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={"bold"}
                variant={"link"}
                color={"white"}
                href={"/login"}
                mt={5}
              >
                Log In | Sign up
              </Button>
            )}
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'white');
  const linkHoverColor = useColorModeValue('white', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'white');

  return (
    <Stack direction={'row'} spacing={4} alignItems={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href}
                fontSize={'sm'}
                fontWeight={'bold'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('black', 'white') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'white' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label:'Home',
    href:'/'
  },
  {
    label: 'Vitamins',
    href:'#',
    children: [
      {
        label: 'Multivitamins',
        href: '/productlist',
      },
      {
        label: 'Vitamins A to Z',
        href: '#',
      },
      {
        label: 'Minerals',
        href: '#',
      },
      {
        label: 'Vitamin B12',
        href: '#',
      },
      {
        label: 'Adult Daily Nutrition',
        href: '#',
      }
    ],
  },
  {
    label: 'Diabetes',
    href:'#',
    children: [
      {
        label: 'Blood Glucosse Monitors',
        href: '#',
      },
      {
        label: 'Test Strip & Lancets',
        href: '#',
      },
      {
        label: 'Syringes & Pens',
        href: '#',
      },
      {
        label: 'Continuous Glucose Monitors',
        href: '#',
      },
    ],
  },
  {
    label: 'Health Care Devices',
    href:'#',
    children: [
      {
        label: 'Blood Glucosse Monitors',
        href: '#',
      },
      {
        label: 'Test Strip & Lancets',
        href: '#',
      },
      {
        label: 'Syringes & Pens',
        href: '#',
      },
      {
        label: 'Continuous Glucose Monitors',
        href: '#',
      },
    ],
  },
  {
    label: 'Personal Care',
    href:'#',
    children: [
      {
        label: 'Body Lotions',
        href: '#',
      },
      {
        label: 'Lip Balm',
        href: '#',
      },
      {
        label: 'Acne care',
        href: '#',
      },
      {
        label: 'Facewash',
        href: '#',
      },
    ],
  },
  {
    label:"Admin",
    href:'/adminlogin'
  }
];
//  {/* <Button
          //   as={'a'}
          //   display={{ base: 'none', md: 'inline-flex' }}
          //   fontSize={'sm'}
          //   fontWeight={'bold'}
          //   color={'white'}
          //   bg={'white'}
          //   href={'/signup'}
          //   _hover={{
          //     bg: 'gray',
          //   }}>
          //   Sign Up
          // </Button> */}