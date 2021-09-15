import React, { useEffect } from 'react'
import fetchUser from './redux/actions'
import { connect } from 'react-redux'
import buyCake from './redux/cakes/cakeActions'
import Counter from './Counter'

function App({ userData, getName, getCake }) {
  console.log(userData)
  useEffect(() => {
    getName()
  }, [])

  return (
    <div className="App">
      {/* <h1>{userData.numOfCakes}</h1>
      <button onClick={() => getCake()}></button> */}
      <Counter />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userData: state.cake,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: () => dispatch(fetchUser()),
    getCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
