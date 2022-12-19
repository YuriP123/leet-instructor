import React from "react";
import { Box,Container, Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Lorem, useDisclosure} from "@chakra-ui/react";
import styles from "../Styles/Home.module.scss"
import Taskframe from "./Components/Taskframe"

function TaskOverlay(){
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default function Home(){

    //const taskList = taskArray.map(() => <Taskframe/>)

    return(
        <Container maxW='2xl' centerContent>
            <Box boxShadow='md' color='black' className={styles.frame} mt={"200px"} width="1000px" borderRadius="md">
                <Button colorScheme='yellow'>Home</Button>
                <Button colorScheme='yellow'>History</Button>
                <Button colorScheme='yellow'>Graphs</Button>
                <TaskOverlay/>
            </Box>
            <Box className={styles.stage}color="white">
            </Box>
        </Container>
    )
}