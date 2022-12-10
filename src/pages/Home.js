import React from "react";
import {Box} from "@chakra-ui/react"
import '../pages/Home.scss'

export default function Home(){
    return(
        <div>
            <Box color='black' className="frame tw-max-w-[500px]">
                <navbar className="">
                    <button>Home</button>
                    <button>History</button>
                    <button>Graphs</button>
                    <button>+ Add New Task</button>
                </navbar>
                <div className="tw-w-[500px] tw-h-[800px]">

                </div>
            </Box>
        </div>
    )
}