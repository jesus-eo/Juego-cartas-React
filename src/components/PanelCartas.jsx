import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { girarCarta, resetPartida } from '../features/cartas/cartasSlice';
import Mensajes from './mensajeFlash/Mensajes';
import { useNavigate} from 'react-router-dom'
import swal from 'sweetalert'


export const Panel = () => {

  const dispatch = useDispatch()
  const cartas = useSelector(state => state.cartas)
  const [puntos, setPuntos] = useState(0)
  const [mensajeBtn, setMensajeBtn] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    if(cartas.filter(carta => carta.ocultada).length == cartas.length){
      setTimeout(() => {swal('Fin del juego',`Su puntucación es de ${puntos} puntos`,'success'); navigate('/');
      setTimeout(() => {setPuntos(0); dispatch(resetPartida())},200) }, 300) 
    }else {
      setTimeout(() => {encontrarPareja(cartas)}, 300) 
    }
  }, [cartas])

/**
 * Si las cartas son iguales las oculta y suma puntos, si son distintas resta puntos y la vuelve a su estado inicial
 * @param {Array de object} cartas 
 */ 

  const encontrarPareja = (cartas) => {
    const cartasGiradas = cartas.filter(carta => carta.girada);
    if (cartasGiradas.length === 2) {  
      const numCartasOcultas = (cartas.filter( carta => carta.girada == true)).length    
      if (cartasGiradas[0].color === cartasGiradas[1].color && cartasGiradas[0].numero === cartasGiradas[1].numero ) {      
        dispatch(girarCarta({ cartas: cartasGiradas, actions: 'ocultar' }))        
        setPuntos(a => a + numCartasOcultas * 10);
        mostrarMensaje('acertaste');
      } else {    
        dispatch(girarCarta({ cartas: cartasGiradas, actions: 'girar', restablecer: true }))
        setPuntos(a => a - numCartasOcultas*10);    
        mostrarMensaje('fallaste')
      }
    }
  }

  const mostrarMensaje = (mensaje) =>{
    setMensajeBtn(mensaje);
    setTimeout(() => {return setMensajeBtn('') },1000)
  }

  return (
    <div className='min-h-screen w-full h-full  flex flex-col'>
      <div className='puntuacion  h-40 flex justify-end items-center'>
        <h2 className='font-bold p-4'>{puntos}:Puntos</h2>
      </div>
      <div className='container-cartas flex-1 grid grid-cols-6 gap-10 h-96'>
        {cartas.map(carta => {
          return <div key={carta.id}>

            <button
              type='submit'
              style={carta.girada ? { backgroundColor: carta.color } : { backgroundColor: 'grey' }}
              className={classNames(carta.ocultada ? 'invisible' : '', 'h-32 cursor-pointer w-full')}
              onClick={() => { dispatch(girarCarta({ cartas: carta, actions: 'girar' })) }}>
             <span className={classNames(carta.girada ? '' : 'invisible')}>{carta.numero}</span>
            </button>
          </div>
        })}
      </div>
      <Mensajes mensajeBtn={mensajeBtn} dispatch={dispatch} setPuntos={setPuntos}/>
    </div>
  )
}

