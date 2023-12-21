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
        <Card 
          title="Desert"
          imgURL="https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
        <Card 
          title="Artic"
          imgURL="https://images.unsplash.com/photo-1509326066092-14b2e882fe86?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
        <Card 
          title="Woodland"
          imgURL="https://images.unsplash.com/photo-1547140741-00d6fd251528?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>
        <Card 
          title="City"
          imgURL="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Card>

      </div>

    </>
  )
}

export default App
