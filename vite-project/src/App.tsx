/*
  Utilizamos {useState} la cual es un modulo de la libreria
  de React, llamamos al metodo de esta manera para traer
  exclusivamente la "funcion" que queremos utilizar

  Tambien importamos el componente Button y los estilos de la App
*/
import { useEffect, useState } from 'react'
import {Button} from './components'
import './App.css'

/*
  Generamos el componente App con su estado incial, y como manejamos
  al hijo "Button" desde el padre "App", ambos botones contadores
  estan enlazados, por decirlo de alguna manera, logrando que interactuen
  dinamicamente y cuando suma uno, se suma el otro y biceversa
*/ 

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)
  const [count5, setCount5] = useState(0)
  const [count6, setCount6] = useState(0)
  const [count7, setCount7] = useState(0)

  /* Agregamos nuevos estados para comenzar ejemplificar un
    hipotetico caso en el que tenemos que utilizar una fecha
    de manera asincrona, es decir, un metodo por el cual no se
    realiza de forma instantanea, sino que por el contrario,
    debe de esperar para obtener una respuesta
  */

  // Declaramos los estados

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  //Generamos la peticion a la fecha de manera asincrona
  const fetchData = async () => {
    setLoading(true)
    try {
      //Obtener la fecha de un hipotetico url hacia una api
      const response = await fetch("https://api.example.com/data")

      //Si no responde forzamos un error para manejarlo con catch
      if(!response.ok){
        throw new Error("Error al obtener datos")
      }
      //De ser el caso de obtener una respuesta lo almacenamos en formato json
      const jsonData = await response.json()
      //Seteamos la data para que se renderize el componente
      setData(jsonData)

    } catch (error) {
      setError(error as string)
    }finally{
      //Independientemente de lo que ocurra en el try-catch, 
      //al concluir la peticion, seteamos loading para que se encuentre
      //en condiciones de ser vuelto a utilizar
      setLoading(false)
    }
  }

  /*
    El useEffect es considerado un Hook, en donde utilizaremos el mismo
    cuando sea necesario que se ejecute algo externo al componente,
    como en este caso, realizar una peticion a una api.
    El useEffect esta compuesto por 2 partes, la primera es una funcion
    a realizar cada vez que algo se re-renderiza, y el estado al cual se
    esta "monitoreando" para cuando éste realice un cambio, se ejecute
    la funcion, en este caso fetchData()
  */  
  useEffect(()=>{
    fetchData()
  },[])

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error}</div>
  }
  return (
    <>
      <div className="container">
        <div>{JSON.stringify(data)}</div>
        <Button label={`Count is ${count1}`} parentMethod={()=>{setCount1(count1+1)}}></Button>
        <Button label={`Apreta para sumar bigote de foca ${count2}`} parentMethod={()=>{setCount2(count2+1)}}></Button>
        <Button label={`Contador es ${count3}`} parentMethod={()=>{setCount3(count3+1)}}></Button>
        <Button label={`Contador es ${count4}`} parentMethod={()=>{setCount4(count4+1)}}></Button>
        <Button label={`Contador es ${count5}`} parentMethod={()=>{setCount5(count5+1)}}></Button>
        <Button label={`Contador es ${count6}`} parentMethod={()=>{setCount6(count6+1)}}></Button>
        <Button label={`Contador es ${count7}`} parentMethod={()=>{setCount7(count7+1)}}></Button>
      </div>
    </>
  )
}

export default App
