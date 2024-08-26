import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    bannerData: [],
    imageURL:"",
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setBannerData: (state,action) => {
          state.bannerData = action.payload
        },
        setImageURL: (state,action) => {
          state.imageURL = action.payload
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setBannerData,setImageURL } = moviesSlice.actions

export default moviesSlice.reducer