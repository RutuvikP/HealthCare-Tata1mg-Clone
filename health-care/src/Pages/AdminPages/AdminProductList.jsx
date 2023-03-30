import { Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAdmin } from "../../redux/adminReducer/action";
import { Link } from "react-router-dom";

export const AdminProductList=()=>{

    const products=useSelector((store)=>store.adminReducer.products)
    // console.log(products);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProductAdmin)
    },[])
    return(
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
                        products && products.map((el)=>(
                            <Tr key={el.id}>
                                <Td>{el.id}</Td>
                                <Td>{el.title}</Td>
                                <Td>{el.brand}</Td>
                                <Td>{el.price}</Td>
                                <Td color={'blue'} _hover={{cursor:'pointer'}}><Link to={`/edit/${el.id}`}>Edit</Link></Td>
                                <Td color={'red'} _hover={{cursor:'pointer'}}>Delete</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    )
};