'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { supplierSlice } from './supplier/slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  supplier: supplierSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
