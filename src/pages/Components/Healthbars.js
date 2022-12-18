import { Container, IconButton} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons'
import React from "react";
import styles from "../../Styles/Healthbars.module.scss"

export default function Healthbars(){
    return(
        <Container className={styles.taskFrame} pt="50px">
            <div>
                <h1>Title</h1>
                <div className="HealthbarOverlay">
                    <img src="healthbar_frame.png" alt="healthbar"></img>
                </div>
            </div>
            <IconButton
            mt="35px"
            ml="20px"
            colorScheme='green'
            aria-label='Search database'
            icon={<AddIcon />}
            />
        </Container>
    )
}