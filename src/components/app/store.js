import { configureStore } from '@reduxjs/toolkit'
import cartasReducer from '../../features/cartas/cartasSlice'

export const store = configureStore({
  reducer: {
    cartas: cartasReducer
  },
})