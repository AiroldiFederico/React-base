import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function handleClick() {
  alert("ciao");
}
function handleChange(e) {
  console.log(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
}

function App() {
  const [count, setCount] = useState(0)
  const places = [
    {
        id: 0,
        title: "Desert",
        description: "A vast and arid region with minimal vegetation and extreme temperatures.",
        imgURL: "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true
    },
    {
        id: 1,
        title: "Arctic",
        description: "A polar region characterized by cold temperatures, ice, and snow.",
        imgURL: "https://images.unsplash.com/photo-1509326066092-14b2e882fe86?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false
    },
    {
        id: 2,
        title: "Woodland",
        description: "A dense area of trees, providing a rich habitat for a variety of wildlife.",
        imgURL: "https://images.unsplash.com/photo-1547140741-00d6fd251528?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true
    },
    {
        id: 3,
        title: "City",
        description: "A large and densely populated urban area with a variety of structures and activities.",
        imgURL: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: false
    }
  ];


  return (
    <>
      <div className='grid grid-cols-4 gap-10 '>
        
        {places.map((place) => (
          <Card
            key={place.id}
            title={place.title}
            isVisited={place.isVisited}
            imgURL={place.imgURL}
          >
            {place.description}
          </Card>
        ))}

      </div>

      <div className='card flex justify-center gap-4'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <button onClick={handleClick}>alert</button>

          <input type="text" onChange={handleChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>

          <form onSubmit={handleSubmit}>
              <button type='submit'>invia</button>
          </form>
      </div>

    </>
  )
}

export default App
