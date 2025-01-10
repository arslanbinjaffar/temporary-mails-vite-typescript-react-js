import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tempMailApi } from '../services/tempMailApi'
import { mailSlice } from '@/redux/slicers/mail'
export const store = configureStore({
    reducer: {
        mail: mailSlice.reducer,
        [tempMailApi.reducerPath]: tempMailApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tempMailApi.middleware),
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch