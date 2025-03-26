import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*
  Importamos metodos con {} para traer funcionalidades
  en particular y no traer toda la libreria de manera innecesaria

  Se entiende por componente a una unidad minima logica, como lo podria
  ser un boton, justamente lo que busca React es atomizar los elementos
  de un sistema, y utilizar todo de manera modularizada

  Entendemos por trigger al evento que dispara una accion, como por ejemplo,
  el click de un boton, lo cual produce un commit, que es cuando
  se actualiza el estado del componente renderizando algo nuevo, este commit
  realiza una comparacion entre el DOM y el DOM Virtual y muestra la 
  diferencia o mejor dicho los "cambios"
*/

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)