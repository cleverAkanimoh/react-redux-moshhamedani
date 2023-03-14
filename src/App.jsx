// import { useState } from 'react'
import store from "./store"
import { actionsCreator, actionsResolver } from './actions'

export default function App() {

  store.dispatch(actionsCreator("bug 1"))
  store.dispatch(actionsResolver(1))

  console.log(store.getState());
}