import { Table, TableContainer, Tbody, Th, Thead, Tr, Td, Text} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAdmin } from "../../redux/adminReducer/action";
import { Link, useLocation } from "react-router-dom";
import AdminNav from "../../Components/AdminComponents/AdminNav";


export const AdminProductList=()=>{
    const location = useLocation();
    const products=useSelector((store)=>store.adminReducer.products)
    // console.log(products);

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProductAdmin)
    },[])
    return(
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
                        products && products.map((el)=>(
                            <Tr key={el.id}>
                                <Td>{el.id}</Td>
                                <Td>{el.title.slice(0,100)}</Td>
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
        </>
    )
};