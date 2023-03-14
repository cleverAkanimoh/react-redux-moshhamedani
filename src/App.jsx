// import { useState } from 'react'
import store from "./store"
import * as actions from './actionTypes'


export default function App() {
  store.subscribe(() => {
    console.log("store changed", store.getState());
  })
  store.dispatch({
    type: actions.Bug_Added,
    payload: {
      description: "bug added 1"
    }
  })

  store.dispatch({
    type: actions.Bug_Removed,
    payload: {
      id: 1
    }
  })
  // console.log(store.getState());
}

