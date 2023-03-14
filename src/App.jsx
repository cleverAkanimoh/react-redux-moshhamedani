// import { useState } from 'react'
import store from "./store"
import {actionsCreator} from './actions'


export default function App() {
  store.subscribe(() => {
    console.log("store changed", store.getState());
  })
  
  store.dispatch(actionsCreator("bug 1"))

  // store.dispatch()
  console.log(store.getState());
}

