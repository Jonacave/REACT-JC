
const Contador = ({ max, counter, setCounter, handlerAgregar }) => {

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
            <button
                onClick={handleRestar}
                className="btn btn-outline-primary my-2 mx-3"
                disabled={counter === 1}
            >-</button>

            <span className="mx-2">{counter}</span>

            <button onClick={handleSumar}
                className="btn btn-outline-primary my-2 mx-3"
                disabled={counter === max}
            >+</button>

            <br />
            <button onClick={handlerAgregar}
                className="btn btn-primary my-2 mx-2">
                Agregar al carrito</button>
        </div>
    )
}

export default Contador