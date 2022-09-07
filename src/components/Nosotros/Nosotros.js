const Nosotros = () => {



    const handleClick =() =>{
        console.log ("Click!!!")

    }   

    window.addEventListener ('Click', handleClick)
    
  return (
        <div className="container my-5">
            <h2>Nosotros</h2>
            <hr></hr>
        </div>
    )
}
export default Nosotros