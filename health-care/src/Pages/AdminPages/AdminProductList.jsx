import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, Center, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProductAdmin } from "../../redux/adminReducer/action";
import { Link } from "react-router-dom";

export const AdminProductList = () => {

    const { products, isLoading } = useSelector((store) => store.adminReducer)
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
            <TableContainer>
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
                                    <Td>{el.title}</Td>
                                    <Td>{el.brand}</Td>
                                    <Td>{el.price}</Td>
                                    <Td color={'blue'} _hover={{ cursor: 'pointer' }}><Link to={`/edit/${el.id}`}>Edit</Link></Td>
                                    <Td color={'red'} _hover={{ cursor: 'pointer' }} onClick={()=>handleDelete(el.id)}>Delete</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }
};