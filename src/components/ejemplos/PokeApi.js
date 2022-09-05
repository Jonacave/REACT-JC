
import { useState, useEffect } from "react"
//   id= number   | name = string   | limit = number



//              |         dominio         |  endpoinst | parametros
// const url = "https://api.coderhouse.com/alumnos?id=15"
// const url = "https://api.coderhouse.com/alumnos?name=alesio%20adrover&limit=5"

// const url = "https://api.coderhouse.com/alumnos/{id}"
// segment params
// const url = "https://api.coderhouse.com/alumnos/38040/reactjs"


// fetch(url: string, config: obj)


const PokeApi = () => {

    const [id, setId] = useState(1)
    const [pokemon, setpokemon] = useState(null)

    const handSiguiente = () => {
        setId(id + 1)
    }

    const handAnterior = () => {
        if (id > 1) {
            setId(id - 1)
        }
    }


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setpokemon(data)
            })


    })



    return (
        <div className="container my-5">
            <h2>Poke Api</h2>
            <hr />

            {
                pokemon
                    ?
                    <>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </>
                    : null
            }

            <button
                onClick={handAnterior}
                className="btn btn-primary"
                disabled= {id === 1}>
                Anterior</button>

            <button
                onClick={handSiguiente}
                className="btn btn-primary">
                Siguiente</button>

        </div>


    )
}

export default PokeApi