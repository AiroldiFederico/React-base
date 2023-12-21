import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-4 gap-10 '>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

    </>
  )
}

export default App
