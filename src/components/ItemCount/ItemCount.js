import { useState } from "react"

const Contador = () => {


    const [counter, setCounter] = useState(0)
    const stock = 5

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleSumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }


    return (
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-outline-primary">+</button>
        </div>
    )
}

export default Contador