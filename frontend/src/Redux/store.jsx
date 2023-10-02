import {legacy_createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import { Reducer } from './Reducer'

export const store =legacy_createStore(Reducer,applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState().isAuth)
})