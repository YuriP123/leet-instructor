import '../Styles/globals.scss'
import Home from './Home.js'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className='screen'>
        <Home/>
      </div>
    </ChakraProvider>
  );
}
export default App;
