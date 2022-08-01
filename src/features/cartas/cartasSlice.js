import { createSlice } from '@reduxjs/toolkit'

const originState = [
    {
        id: 1,
        numero: 1,
        color: 'blue',
        girada: false,
        ocultada: false
    },
    {
        id: 2,
        numero: 1,
        color: 'blue',
        girada: false,
        ocultada: false
    },
    {
        id: 3,
        numero: 2,
        color: 'blue',
        girada: false,
        ocultada: false
    },
  
    {
        id: 4,
        numero: 2,
        color: 'blue',
        girada: false,
        ocultada: false
    },
  
    {
        id: 5,
        numero: 3,
        color: 'blue',
        girada: false,
        ocultada: false
    },
  
    {
        id: 6,
        numero: 3,
        color: 'blue',
        girada: false,
        ocultada: false
    },
   
    {
        id: 7,
        numero: 1,
        color: 'green',
        girada: false,
        ocultada: false
    },
    {
        id: 8,
        numero: 1,
        color: 'green',
        girada: false,
        ocultada: false
    },
   
    {
        id: 9,
        numero: 2,
        color: 'green',
        girada: false,
        ocultada: false
    },
   
    {
        id: 10,
        numero: 2,
        color: 'green',
        girada: false,
        ocultada: false
    },
   
    {
        id: 11,
        numero: 3,
        color: 'green',
        girada: false,
        ocultada: false
    },
   
    {
        id: 12,
        numero: 3,
        color: 'green',
        girada: false,
        ocultada: false
    },
   
   
    {
        id: 13,
        numero: 1,
        color: 'yellow',
        girada: false,
        ocultada: false
    },
    {
        id: 14,
        numero: 1,
        color: 'yellow',
        girada: false,
        ocultada: false
    },
    {
        id: 15,
        numero: 2,
        color: 'yellow',
        girada: false,
        ocultada: false
    },
    {
        id: 16,
        numero: 2,
        color: 'yellow',
        girada: false,
        ocultada: false
    },
    {
        id: 17,
        numero: 3,
        color: 'yellow',
        girada: false,
        ocultada: false
    },
    {
        id: 18,
        numero: 3,
        color: 'yellow',
        girada: false,
        ocultada: false
    },
];
/**
 * Desordenamos cartas
 */
const initialState = originState.sort(()=>  Math.random() - 0.5)

export const cartasSlice = createSlice(
    {
        name: 'cartas',
        initialState,
        reducers: {
            /**
             * 
             * @param {*} state 
             * @param {ocultar o girar} action
             * giramos o ocultamos carta dependiendo del parámetro que recibamos en el actions puede ser 'ocultar o girar', si recibimos restablecer, girada la ponemos a false
             */
            'girarCarta': (state, action) => {
                const { cartas, actions, restablecer } = action.payload;       
                if (actions === 'ocultar') {                    
                    state.map(carta => { 
                        if (carta.id === cartas[0].id || carta.id === cartas[1].id) {
                            carta.ocultada = true;
                            carta.girada = false;
                        }
                    })
                   
                } else {
                    state.map(carta => {    
                        if (carta.id === cartas.id && !restablecer) {
                            carta.girada = true;
                        }else if(carta.id !== cartas.id && restablecer){
                            carta.girada = false;
                        }
                    })
                }
            },
            'resetPartida': (state) => {
                Object.assign(state, initialState)            
            },
            'girarCartasInicio': (state) => {
                state.map(carta => {return carta.girada = true});
            }
        }
    }
)
/* Exportamos las funciones que podemos utilizar */
export const { girarCarta, ocultarCartas, resetPartida, girarCartasInicio } = cartasSlice.actions
/* Aqui exportamos la propiedad reducer que utilizamos en el store(contexto) */
export default cartasSlice.reducer