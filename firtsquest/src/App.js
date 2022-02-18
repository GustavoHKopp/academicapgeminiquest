import {useState} from 'react'
import './App.css';


function App() {
  const [stair, setStair] = useState('')

  const makeStaris = (e) => {
    let getValue = parseInt(e.target.value)
    



    setStair(getValue)
  }


  return <>
    <label>digite um numero maior que 1</label><br />
    <input type='number' min='1' onChange={makeStaris}></input>
    <p>{stair}</p>
  </>
}

export default App;
