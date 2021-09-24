import { combineReducers } from '@reduxjs/toolkit'

import filtersSlice from './slices/filters'
import { usersApi } from './slices/usersApi'


const rootReducer = combineReducers({
    filtersState: filtersSlice,
    [usersApi.reducerPath]: usersApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
