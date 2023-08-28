import getRandomElemArray from "./getRandomElemArray"

const BtnQuote = ({ setQuote, phrases, setNumberBg, setColorBg}) => {
  const handleRandomPhrase = () => {
    setQuote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }

  return (
    <>
    <button className="btn" onClick={handleRandomPhrase}>🧠 other phrase</button>
    </>
  )
}

export default BtnQuote