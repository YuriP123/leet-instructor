import React from "react";
import {Container, Box} from "@chakra-ui/react"
import styles from "../Styles/Home.module.scss"

export default function Home(){
    return(
        <Container maxW='2xl' centerContent>
            <Box boxShadow='md' color='black' className={styles.frame} mt={"200px"} width="1000px" borderRadius="md">
                <navbar className="frame tw-text-none">
                    <a href="Home">Home</a>
                    <a href="History">History</a>
                    <a href="Graphs">Graphs</a>
                    <a href="NewTask">+ Add New Task</a>
                </navbar>
            </Box>
            <Box className={styles.stage}color="white">
                <p>hello</p>
            </Box>
        </Container>
    )
}