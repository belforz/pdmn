export default function App(){
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(`Deu certo: ${position}`)
    },
    (err) => {
      console.log(`Erro: ${err}`)
    },
  )
  return (
    <div>
      <i className="fa-solid fa-cat fa-8x"></i>
    </div>
  )
}