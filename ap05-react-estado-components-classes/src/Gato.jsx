
const Gato = (props) => {
  return (
    <i className={`fa-solid fa-cat fa-${props.tamanho} fa-${props.direcao}`}></i>
  )
}

export default Gato