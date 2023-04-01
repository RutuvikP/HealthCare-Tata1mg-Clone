
import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, Text, Center, Spinner, useToast} from "@chakra-ui/react";
import { useEffect, useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProductAdmin } from "../../redux/adminReducer/action";
import { Link, useLocation } from "react-router-dom";
import AdminNav from "../../Components/AdminComponents/AdminNav";
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'

export const AdminProductList = () => {

    const { products, isLoading } = useSelector((store) => store.adminReducer)
    const location = useLocation();
    // console.log(products, isLoading);
    const toast=useToast();


    const dispatch = useDispatch();

    const handleDelete=(id)=>{
        deleteProduct(id).then((res)=>{
            dispatch(getProductAdmin)
            toast({
                title:"Product Deleted Successfully!!",
                status:'success',
                isClosable:true,
                duration:2000
            })
        })
        .catch((err)=>{
            console.log(err);
            toast({
                title:"Something went wrong!!",
                status:'error',
                isClosable:true,
                duration:2000
            })
        })
    }
    useEffect(() => {
        dispatch(getProductAdmin)
    }, [])

    if (isLoading) {
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    } else {
        return (
            <>
            <AdminNav/>
            {location.pathname === "/addproduct" ? "" : <Text fontWeight={'bold'} fontSize={'1rem'}>Product List</Text>}
            <TableContainer marginLeft={'18%'}>
                <Table size={'sm'} variant='striped' m={'auto'} w={'80%'}>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Title</Th>
                            <Th>Brand</Th>
                            <Th>Price</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            products && products.map((el) => (
                                <Tr key={el.id}>
                                    <Td>{el.id}</Td>
                                    <Td>{el.title.slice(0,100)}</Td>
                                    <Td>{el.brand}</Td>
                                    <Td>{el.price}</Td>
                                    <Td bg='#fff'  _hover={{ cursor: 'pointer' }}><Link to={`/edit/${el.id}`}><EditIcon w='100%' h='20px' color='black'/></Link></Td>
                                    <Td bg='#fff' _hover={{ cursor: 'pointer' }} onClick={()=>handleDelete(el.id)}><DeleteIcon w='100%' h='20px' color='red'/></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            </>
        )
    }
};