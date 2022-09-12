
const Contador = ({max, counter, setCounter, handlerAgregar}) => {

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handleSumar = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }


    return (
        <div>
            <button onClick={handleRestar} 
            className="btn btn-outline-primary">-</button>

            <span className="mx-2">{counter}</span>

            <button onClick={handleSumar} 
            className="btn btn-outline-primary">+</button>

            <br/>
            <button  onClick={handlerAgregar}
            className="btn btn-primary my-2 ">
            Agregar al carrito</button>
        </div>
    )
}

export default Contador