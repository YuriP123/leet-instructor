import React, { useEffect, useState } from "react";
import { Box,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure,Input, Slider, SliderTrack,SliderFilledTrack,SliderThumb,SliderMark,} from "@chakra-ui/react";
import {CirclePicker} from 'react-color';

function useLocalState(key){
  const [state, setState] = useState(()=>{
      if (typeof window !== 'undefined') {
        localStorage.getItem(key)
      }
    }
  )

  useEffect(()=>{
    window.localStorage.setItem(key,state)
  },[key,state])

  return [state,setState]
}


export default function TaskModal({setList,list}){
    const [task,setTask] = useLocalState('task')
    const [color,setColor] = useLocalState('color')

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleNameChange(event){
      setTask(event.target.value)
    }
    function handleColorChange(color){
      setColor(color.hex)
    }

    function taskUpdate(){
      if(task){
        setList([
          ...list,
          {
            Task: task,
            color: color
          }
        ])
        setTask('')
        onClose()
      }
    }

    return (
      <div>
        <Button onClick={onOpen}>Add New Task</Button>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent mt="400px" >
            <ModalHeader>Task Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input placeholder="Task Name" mb="20px" value={task} onChange={handleNameChange}></Input>
              <Box mt="50px" >
                <CirclePicker value={color} onChangeComplete={handleColorChange}/>
              </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={taskUpdate}>
                Add Task
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
}


