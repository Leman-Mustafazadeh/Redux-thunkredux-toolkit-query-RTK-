import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from './moviesQuerySlice'
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
    reducer: {
        [movieAPI.reducerPath]: movieAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieAPI.middleware),
});

setupListeners(store.dispatch)
export default store