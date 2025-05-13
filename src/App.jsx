import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [arrayAttrici, setArrayAttrici] = useState([]);

  const fetchArrayAttrici = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setArrayAttrici(res.data))
      .catch((error) => console.error(error));

  }

  useEffect(() => {
    fetchArrayAttrici();
  }, []);

  console.log(arrayAttrici)

  return (
    <>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-12">
            <h1>Lista Attrici</h1>
          </div>
        </div>

        <div className="row g-3">
          {arrayAttrici.map((attrice) => (
            <div key={`attrice-${attrice.id}`} className="col-12 col-md-6 col-lg-4">
              <div className="card rounded-0">
                <div className="row g-0">
                  <div className="col-5">
                    <div className="attrice-img">
                      <img
                        src={attrice.image}
                        alt={attrice.name}
                        className="img-fluid h-100 w-100 object-fit-cover"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="attrice-info d-flex flex-column justify-content-between p-3 h-100">
                      <h3 className="attrice-nome">{attrice.name}</h3>
                      <p className="attrice-nascita">Anno di nascita: {attrice.birth_year}</p>
                      <p className="attrice-nazionalita">Nazionalità: {attrice.nationality}</p>
                      <p className="attrice-bio">Bio: {attrice.biography}</p>
                      <p className="attrice-riconoscimenti">Riconoscimenti: {attrice.awards}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default App
