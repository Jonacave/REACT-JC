import { stock } from "../data/stock"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(stock)
            // reject("promesa rechazada")  
        }, 2000)
    })
}