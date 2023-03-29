import { ModalOverlay, useDisclosure, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, Input } from "@chakra-ui/react"; 
import React from "react";


const AddProductPage = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Add New Product
      </Button>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input ref={initialRef} placeholder='Title' />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder='Image' />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder='Price' />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder='Brand' />
            </FormControl>

            <FormControl mt={4}>
              <Input placeholder='Discount' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default AddProductPage;
