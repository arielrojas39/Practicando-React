/*
  Utilizamos {useState} la cual es un modulo de la libreria
  de React, llamamos al metodo de esta manera para traer
  exclusivamente la "funcion" que queremos utilizar

  Tambien importamos el componente Button y los estilos de la App
*/
import { useState } from 'react'
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

  return (
    <>
      <div className="container">
        <Button label={`Count is ${count1}`} parentMethod={()=>{setCount1(count1+1)}}></Button>
        <Button label={`Apreta para sumar bigote de foca ${count2}`} parentMethod={()=>{setCount2(count2+1)}}></Button>
      </div>
    </>
  )
}

export default App
