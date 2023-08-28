import { useState } from 'react'
import './App.css'
import BtnQuote from './utils/components/BtnQuote'
import Quote from './utils/components/Quote'
import phrases from "./utils/phrases.json"
import getRandomElemArray from './utils/components/getRandomElemArray'


function App() {
  const phrasesRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3 , 4])
  const [quote, setQuote] = useState(phrasesRandom)
  const[numberBg, setNumberBg] = useState(numberRandom)


  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }
  
  return (
    <div style={bgStyle} className='quote-conteiner'>
      <h1>Galleta de la fortuna</h1>
      <Quote phrase = {quote}></Quote>
      <BtnQuote setQuote={setQuote} phrases = {phrases} setNumberBg = {setNumberBg}></BtnQuote>

    </div>
  )
}

export default App
