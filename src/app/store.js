import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../features/movies-slice'

export const store = configureStore({
  reducer: {
    moviesData:moviesSlice
  },
})
