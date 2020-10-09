import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/PhotoSlice'

const rootReducer = {
    photos: photoReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;