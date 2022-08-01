import classNames from 'classnames'
import React from 'react'
import { girarCartasInicio, resetPartida } from '../../features/cartas/cartasSlice'


const Mensajes = ({mensajeBtn, dispatch, setPuntos}) => {

  return (
    <>
    <div className='mt-4 flex justify-around '>
       <p className={classNames(mensajeBtn === 'acertaste' ? 'p-4 rounded-md bg-green-500 transition duration-700 animate-pulse' :'invisible p-4')}>Acertaste
       </p>
       <button className=' bg-blue-600 rounded-md cursor-pointer p-4' 
        onClick={() => {setPuntos(0);
          dispatch(resetPartida());
          dispatch(girarCartasInicio());          
          setTimeout(() => {dispatch(resetPartida())},1000)}}>Reiniciar
        </button>
        <p className={classNames(mensajeBtn === 'fallaste' ? 'p-4  rounded-md  bg-red-500 transition duration-700 animate-pulse' :'invisible p-4')}>Fallaste
        </p>
        </div>
    </>
  )
}

export default Mensajes