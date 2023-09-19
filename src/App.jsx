import { useState } from 'react'
import Structure from './components/structure'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Structure/>
    </>
  )
}

export default App
