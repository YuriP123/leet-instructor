import { Select,Container, IconButton, Box,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, useDisclosure,Input, Slider, SliderTrack,SliderFilledTrack,SliderThumb,SliderMark, Badge,} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import React , {useEffect, useState} from "react";
import styles from "../../Styles/Healthbars.module.scss"
import Healthbar from "./Healthbar"


export default function Taskframe({data}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sliderValue, setSliderValue] = useState('slider')
    const {Task,Difficulty,color} = data
    const [health, setHealth] = useState(800)

    return(
        <Container className={styles.taskFrame} pt="50px">
            <div>
                <h1 style={{backgroundColor: color}}>{Task}</h1> 
                <Healthbar current={health}/>
            </div>
            <IconButton
            mt="35px"
            ml="20px"
            colorScheme='green'
            aria-label='Search database'
            icon={<AddIcon />}
            onClick={onOpen}
            />
                  <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="400px">
          <ModalHeader>Task Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Duration" mb="20px"></Input>

            <Select mb="20px" placeholder='Select option'>
                <option value='option1'>Easy</option>
                <option value='option2'>Medium</option>
                <option value='option3'>Hard</option>
            </Select>

            <h3>Difficulty</h3>
            <SliderComponent onSliderChange={event=> setSliderValue(event)}/>
            <SearchbarComponent/>
          </ModalBody>
          <ModalFooter mt="20px">
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Container>
    )
}

function SearchbarComponent(){
    const [search, setSearch] = useState('')
    const [filterArray, setFilterArray] = useState([])
    const [relatedArray, setRelatedArray] = useState([])
    const topicArray = ['Arrays & Hashing','Two Pointers', 'Stack', 'Binary Search', 'Sliding Window', 'Linked List', 'Trees',
        'Tries', 'Backtracking', 'Heap / Priority Queue', 'Graphs', '1-D PP', 'Intervals', 'Greedy']

    function handleSearchChange(event){
        const word = event.target.value
        setSearch(word)
        const newArray = topicArray.filter((value)=>{
            return value.toLowerCase().includes(word.toLowerCase())
        })
        setFilterArray(newArray)
    }

    function handleBadgeDelete(Topic){
      const newArray = relatedArray.filter(e => e !== Topic)
      setRelatedArray(newArray)

    }
    
    function handleTopicChange(Topic){
        setSearch('')
        setRelatedArray((prev)=>[
            ...prev,
            Topic
        ])
    }

      const topicButtons = relatedArray.map((Topic)=>
          <Badge mr="10px">{Topic}<button><DeleteIcon onClick={()=>{handleBadgeDelete(Topic)}}/></button></Badge>
      )

    const buttonArray = filterArray.map((Topic) =>
        <Button key={Topic} onClick={()=>handleTopicChange(Topic)}>    
            {Topic}
        </Button>
    )

    return(
        <Container w="366">
            <Input mt="30px"placeholder="Related Tasks" value={search} onChange={handleSearchChange}></Input>
              <box>
                {topicButtons}
              </box>
            <box className={styles.searchResults}>
                {search.length !== 0 && buttonArray} 
            </box>
        </Container>
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