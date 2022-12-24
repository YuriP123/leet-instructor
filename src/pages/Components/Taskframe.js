import { Container, IconButton} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import {React, useState} from "react";
import styles from "../../Styles/Healthbars.module.scss"
import Healthbar from "./Healthbar"

export default function Taskframe({data}){
    const title = data.Task
    const [health, setHealth] = useState(800)
    return(
        <Container className={styles.taskFrame} pt="50px">
            <div>
                <h1>{title}</h1>
                <Healthbar current={health}/>
            </div>
            <IconButton
            mt="35px"
            ml="20px"
            colorScheme='green'
            aria-label='Search database'
            icon={<AddIcon />}
            //onClick={addTaskDetails}
            />
        </Container>
    )
}