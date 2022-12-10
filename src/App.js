import './App.scss';
import Home from './pages/Home.js'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
