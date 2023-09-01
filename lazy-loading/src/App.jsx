import React, { Component, Suspense, lazy } from 'react'

// import Home from './component/Home'        //we don't import Home like this in Lazy
const Home = lazy(()=>import('./component/Home'))
const About = lazy(()=>import('./component/About'))

class App extends Component {
  render() {
    return (
      <>
        <h1>Fast rendering code</h1>
        <Suspense fallback={<div>Please Wait</div>}>
          <Home/>
        </Suspense>
        <Suspense fallback={<div>Please Wait About is loadind</div>}>
          <About/>
        </Suspense>
        <About/>

      </>
    )
  }
}
export default  App