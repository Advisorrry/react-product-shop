import { combineReducers } from '@reduxjs/toolkit'

import filtersSlice from './slices/filters'


const rootReducer = combineReducers({
    filtersState: filtersSlice,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
