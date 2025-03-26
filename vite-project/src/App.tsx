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
  const [count, setCount] = useState(0)
  const countMore = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <div className="container">
        <Button label={`Count is ${count}`} parentMethod={countMore}></Button>
        <Button label={`Apreta para sumar bigote de foca ${count}`} parentMethod={countMore}></Button>
      </div>
    </>
  )
}

export default App
