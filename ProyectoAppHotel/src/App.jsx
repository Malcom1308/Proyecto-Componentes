import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header.jsx'
import Reception from './Components/Reception.jsx'
import HotelSample from './Components/HotelSample.jsx'
import Join from './Components/Join.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Reception/>
      <HotelSample/>
      <Join/>
      <Footer/>
    </div>
  );
};

export default App
