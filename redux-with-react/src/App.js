// import React, { useEffect, useState } from 'react'
// import fetchUser from './redux/actions'
// import { connect } from 'react-redux'
// import buyCake from './redux/cakes/cakeActions'
// import Counter from './Counter'

// function App({ userData, getName, getCake }) {
//   const [number, setNumber] = useState(0)
//   console.log(userData)
//   useEffect(() => {
//     getName()
//   }, [])

//   return (
//     <div className="App">
//       {/* <h1>{userData.numOfCakes}</h1>
//       <button onClick={() => getCake()}></button> */}
//       <input
//         type="text"
//         value={number}
//         onChange={(e) => setNumber(+e.target.value)}
//       />
//       <h1>{userData}</h1>
//       <button onClick={() => getCake(number)}>buy {number}</button>
//       <Counter />
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     userData: state.cake.numOfCakes,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getName: () => dispatch(fetchUser()),
//     getCake: (number) => dispatch(buyCake(number)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [toggle, setToggle] = useState(false)

  const clickHandler = (e) => {
    e.preventDefault()
    if (todo !== '' && todo !== 0) {
      setTodos([...todos, todo])
      setTodo('')
    }
  }

  const deleteItem = (ind) => {
    const newList = todos.filter((__, index) => ind !== index)
    setTodos(newList)
  }
  const toggleCSS = (ind) => {
    todos.filter((__, index) => ind === index)

    if (!toggle) {
      setToggle(true)
    } else setToggle(false)
  }

  const renderDom = () => {
    if (todos.length === 1) {
      return <p>{todos.length} task left</p>
    } else if (!todos.length) {
      return ''
    } else {
      return <p>{todos.length} tasks left</p>
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={clickHandler}>
        Add
      </button>

      <div>
        {!!todos.length &&
          todos.map((el, index) => (
            <div ke={index}>
              <p
                onClick={() => toggleCSS(index)}
                className={toggle ? 'todo-item-active' : null}
              >
                {el}{' '}
              </p>
              <button onClick={() => deleteItem(index)}>X</button>
            </div>
          ))}{' '}
      </div>
      <div>{renderDom()}</div>
    </div>
  )
}

export default App
