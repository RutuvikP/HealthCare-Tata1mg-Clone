import { ModalOverlay, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, Input } from "@chakra-ui/react"; 
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AdminNav from "../../Components/AdminComponents/AdminNav";
import { postProduct } from "../../redux/adminReducer/action";
import { AdminProductList } from "./AdminProductList";

const initialState = {
  title:"",
  image:"",
  price:"",
  brand:"",
  rating:null,
  description:""
}

const AddProductPage = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch();

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
  // const initialRef = React.useRef(null);
  

  const handleChange = (e) => {
    const {name, value} = e.target;
    let val = name === "price" ? Number(value) : value;
    
    setProduct((prev) => {
        return {...prev, [name] : val};
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(product))
    setProduct(initialState);
  };

  return (
    <>
      <AdminNav/>
      <Button
        marginTop={'10px'}
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Add New Product
      </Button>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose} maxW={12}>
        {overlay}
        <ModalContent width={'100%'}>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input type="text" value={product.title} placeholder="Title" onChange={(e) => handleChange(e)} name="title"/>
            </FormControl>

            <FormControl mt={4}>
              <Input type="text" value={product.image} placeholder="Image" onChange={(e) => handleChange(e)} name="image"/>
            </FormControl>

            <FormControl mt={4}>
              <Input type="text" value={product.price} placeholder="Price" onChange={(e) => handleChange(e)} name="price" />
            </FormControl>

            <FormControl mt={4}>
              <Input type="text" value={product.brand} placeholder="Brand" onChange={(e) => handleChange(e)} name="brand" />
            </FormControl>

            <FormControl mt={4}>
              <Input type="number" value={product.rating} placeholder="Rating" onChange={(e) => handleChange(e)} name="rating" />
            </FormControl>

            <FormControl mt={4}>
              <Input type="text" value={product.description} placeholder="Description" onChange={(e) => handleChange(e)} name="description" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AdminProductList/>
    </>
  )
};

export default AddProductPage;
