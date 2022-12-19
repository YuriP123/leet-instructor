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


export default function TaskModal(){
    const [task,setTask] = useLocalState('task')
    const [color,setColor] = useLocalState('color')
    const [sliderValue, setSliderValue] = useLocalState('slider')

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleNameChange(event){
      setTask(event.target.value)
    }
    function handleColorChange(color){
      setColor(color.hex)
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
              <h3>Difficulty</h3>
              <SliderComponent onSliderChange={event=> setSliderValue(event)}/>
              <Box mt="50px" >
                
                <CirclePicker value={color} onChangeComplete={handleColorChange}/>
              </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose} >
                Add Task
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }
  function SliderComponent({onSliderChange}){
    const labelStyles = {
      mt: '2',
      fontSize: 'sm',
      pr: '2px'
    }
  
    return (
      <Box>
        <Slider aria-label='slider-ex-6' defaultValue={3} min={1} max={5} step={1} onChange={onSliderChange}>
          <SliderMark value={1} {...labelStyles}>
            1
          </SliderMark>
          <SliderMark value={2} {...labelStyles}>
            2
          </SliderMark>
          <SliderMark value={3} {...labelStyles}>
            3
          </SliderMark>
          <SliderMark value={4} {...labelStyles}>
            4
          </SliderMark>
          <SliderMark value={5} {...labelStyles}>
            5
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }


