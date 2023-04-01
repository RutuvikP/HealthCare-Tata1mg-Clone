import { Heading,Input, VStack,Select, Button, InputLeftAddon, InputLeftElement, InputGroup, useToast  } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../../redux/adminReducer/action";

export const AdminEditProduct=()=>{
    const {id} = useParams();
    // console.log(id);
    const dispatch=useDispatch();
    const [singleProduct,setSingleProduct] = useState({});
    const toast=useToast();
    const navigate=useNavigate();
    const products=useSelector((store)=>store.adminReducer.products)
    // console.log(products);

    const handleChange=(e)=>{
        let {name,value} = e.target;
        if(name=="price") value=+value
        setSingleProduct((prev)=>{
            return {...prev,[name]:value}
        });
    }

    const handleEdit=()=>{
        // console.log(singleProduct);
        dispatch(editProduct(singleProduct,id))
        toast({
            title:"Product Edited Successfully!!",
            description:`Redirecting you to Product List page now!`,
            status:"success",
            isClosable:true,
            duration:3000,
            position:'top'
        })
        setTimeout(() => {
            navigate('/adminproductlist')
        }, 3000);
    }

    useEffect(()=>{
        const data=products.find((el)=>el.id === +id)
        setSingleProduct(data);
    },[]);
    return (
        <div style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', width:"50%", margin:"auto", padding:"10px 0px", marginTop:"20px"}}>
            <Heading size={'md'}>Edit Product of ID:{id}</Heading>
            <VStack w={'80%'} m={'auto'} gap={'10px'}>
                <InputGroup>
                <InputLeftAddon children='Title'/>
                <Input name="title" onChange={(e)=>handleChange(e)} value={singleProduct.title} type={'text'} placeholder='Product Title'/>
                </InputGroup>
                <InputGroup>
                <InputLeftAddon children='Brand'/>
                <Input name="brand" onChange={(e)=>handleChange(e)} value={singleProduct.brand} type={'text'} placeholder='Product Brand'/>
                </InputGroup>
                <InputGroup>
                <InputLeftAddon children='Price'/>
                <Input name="price" onChange={(e)=>handleChange(e)} value={singleProduct.price} type={'number'} placeholder='Product Price'/>
                </InputGroup>
                <Button colorScheme={'orange'} onClick={handleEdit}>Edit</Button>
            </VStack>
        </div>
    )
};