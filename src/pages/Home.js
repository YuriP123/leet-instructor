import React from "react";
import { Box,Container, Button} from "@chakra-ui/react";
import styles from "../Styles/Home.module.scss"
import TaskModal from "./Components/TaskModal"
import Taskframe from "./Components/Taskframe"

export default function Home(){
    const [dataList, setDataList] = React.useState([])
    const taskList = dataList.map((element,index) => <Taskframe data={dataList[index]}/>)

    return(
        <Container maxWidth='2xl' centerContent>
                <Box boxShadow='md' color='black' className={styles.frame} mt={"200px"} width="1000px" borderRadius="md">
                    <Button colorScheme='yellow'>Home</Button>
                    <Button colorScheme='yellow'>History</Button>
                    <Button colorScheme='yellow'>Graphs</Button>
                    <TaskModal setList={setDataList} list={dataList}/>
                </Box>
                <Box className={styles.stage}color="white">
                    {taskList}
                </Box>
        </Container>
    )
}