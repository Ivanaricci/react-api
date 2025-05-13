import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [arrayAttrici, setArrayAttrici] = useState([]);

  const fetchArrayAttrici = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => setArrayAttrici(res.data.actresses));
  }

  useEffect(() => {
    fetchArrayAttrici();
  }, []);

  console.log(arrayAttrici)

  return (
    <>

    </>
  )
}

export default App
