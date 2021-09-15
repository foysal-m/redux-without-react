import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import buyCake from './redux/cakes/cakeActions'
import { BUY_CAKE } from './redux/cakes/cakeTypes'

function Counter() {
  const cake = useSelector((state) => state.cake)
  const dispatch = useDispatch()
  return (
    <div>
      {' '}
      cake from counter
      {cake.numOfCakes}
      <button onClick={() => dispatch(buyCake())}>click</button>
    </div>
  )
}

export default Counter
