import { combineReducers } from '@reduxjs/toolkit'

import filtersSlice from './slices/filters'
import { productApi } from './slices/productApi'


const rootReducer = combineReducers({
    filtersState: filtersSlice,
    [productApi.reducerPath]: productApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
