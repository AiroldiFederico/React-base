import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import CardForm from './components/CardForm'

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
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1,2,3]);

  const addItem = () => {
    const newItem = 4;
    setItems([...items, newItem])
    console.log(items)
  };





  const [places, setPlaces] = useState([
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
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
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
  ]);

  const addPlace = (place) => {
    setPlaces([...places, place])
  };


  return (
    <>

      <CardForm propAddPlace={addPlace} ></CardForm>

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

          <button onClick={addItem}>
            additem
          </button>

          <button onClick={handleClick}>alert</button>

          <input type="text" onChange={handleChange} className=' border text-sm rounded-lg block p-2.5 '/>

          <form onSubmit={handleSubmit}>
              <button type='submit'>invia</button>
          </form>
      </div>

    </>
  )
}

export default App
