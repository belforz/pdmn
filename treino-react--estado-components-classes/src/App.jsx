import Cartao from "./cardMega"
import Numero from "./Numero"
import NumerosCard from "./numerosCard"

const App = () => {
  const cabecalho = "MEGA SENA"
  return (
    <div className="container">
      <div className="col-12 col-lg-6 col-0xxl-3">
        <Cartao cabecalho ={cabecalho}>

      <NumerosCard >
        <Numero />
      </NumerosCard>
        </Cartao>
        
        {/* <NumerosCard /> */}
        
      </div>
    </div>
  )
}

export default App