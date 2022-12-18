import React from "react";
import {Container, Box} from "@chakra-ui/react"
import styles from "../Styles/Home.module.scss"
import Healthbars from "./Components/Healthbars"

export default function Home(){
    return(
        <Container maxW='2xl' centerContent>
            <Box boxShadow='md' color='black' className={styles.frame} mt={"200px"} width="1000px" borderRadius="md">
                <ul className="frame tw-text-none">
                    <li><a href="Home">Home</a></li>
                    <li><a href="History">History</a></li>
                    <li><a href="Graphs">Graphs</a></li>
                    <li><a href="NewTask">+ Add New Task</a></li>
                </ul>
            </Box>
            <Box className={styles.stage}color="white">
                <Healthbars/>
                <Healthbars/>
                <Healthbars/>
            </Box>
        </Container>
    )
}