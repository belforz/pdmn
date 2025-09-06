const CartaoMega = (props) => {
  return (
    <div className="card">
      <div className="card-header bg-grey text-muted fs-3">
        {props.cabecalho}
        
      </div>
      <div className="card-body ">
        {props.children}
      </div>
      </div>
  )
}

export default CartaoMega