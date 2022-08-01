import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { girarCartasInicio, resetPartida } from '../features/cartas/cartasSlice';

const Inicio = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <Link onClick={()=>{dispatch(girarCartasInicio());
          setTimeout(() => {dispatch(resetPartida())},1000)}} className= ' rounded-md animate-bounce  p-4 bg-blue-600' to={'juego-cartas'}>Iniciar partida</Link>
    </div>
  )
}

export default Inicio