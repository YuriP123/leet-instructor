import React from "react";
import { Box,Container, Button} from "@chakra-ui/react";
import styles from "../Styles/Home.module.scss"
import TaskModal from "./Components/TaskModal"

export default function Home(){

    //const taskList = taskArray.map(() => <Taskframe/>)

    return(
        <Container maxW='2xl' centerContent>
            <Box boxShadow='md' color='black' className={styles.frame} mt={"200px"} width="1000px" borderRadius="md">
                <Button colorScheme='yellow'>Home</Button>
                <Button colorScheme='yellow'>History</Button>
                <Button colorScheme='yellow'>Graphs</Button>
                <TaskModal/>
            </Box>
            <Box className={styles.stage}color="white">
            </Box>
        </Container>
    )
}