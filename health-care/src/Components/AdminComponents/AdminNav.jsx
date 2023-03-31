import React from 'react';
import {NavLink} from 'react-router-dom'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import {
  FiMenu,
  FiBell,
} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {HiFolderAdd} from 'react-icons/hi';
import {GiMedicines} from 'react-icons/gi';
import {FaUsers} from 'react-icons/fa';
import {RiLogoutCircleFill} from 'react-icons/ri';



const LinkItems= [
  { name: 'Home', icon: AiFillHome, path:'/admin_dashboard'},
  { name: 'Add Product', icon: HiFolderAdd, path:'/addproduct' },
  { name: 'Multivitamins', icon: GiMedicines, path: '/adminproductlist'},
  { name: 'Users', icon: FaUsers, path:'/admin_users' },
  { name: 'Logout', icon: RiLogoutCircleFill, path:'/' }
];

export default function AdminNav({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box border={'0px solid black'} pos={'fixed'} top={0} right={0} left={0} zIndex={999}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        border={'0px solid '}
        bg="gray.100"
        
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Image src={logo}  w={120} alt="logo" bg={"gray.200"} /> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        
        <NavItem key={link.name} icon={link.icon} item={link.path}>
          {link}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, item ,...rest}) => {
  return (
    <NavLink to={item} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children.name}
      </Flex>
    </NavLink>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
        <Text fontWeight={'bold'} marginRight={'50%'} fontSize={'1.4rem'} width={'60rem'} height={'100%'} justifyContent={'center'} display={'flex'} alignItems={'center'}>Welcome in Admin Dashboard</Text>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      
        
        
        {/* <Image display={{ base: 'flex', md: 'none' }} src={logo}  w={[70 ,90 ,120]} alt="logo" /> */}
      

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">Rutuvik</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                </Box>
              </HStack>
            </MenuButton>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};