import { useEffect, useState } from 'react'
import { api } from './api/api'
import './App.css'

const App = () => {

  //api.get("/character").then((e)=>console.log(e.data));
  const [palabra, setpalabra] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  useEffect(()=>{
    api.get("/character").then((e)=>console.log(e.data));
  }, [])//Cada vez que cambie el count o lo que pongas renderiza
  return (
    <>
      <p>{count}</p>
      <p>{palabra}</p>
      <button onClick={()=>{setCount(count+1)}}>Pulsale</button>
      <input onChange={(e)=>{setpalabra(e.target.value)}}/>
    </>
  )
}

export default App
