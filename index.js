const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
  //but action creator is  a funtion that returns an action object
  return {
    type: BUY_CAKE,
    info: 'first redux action', //action is just an object
    // action object has type property (normally a string constant) const BUY_CAKE = 'BUY_CAKE'
  }
}

const initialState = {
  numOfCakes: 10,
}
const reducer = (state = initialState, action) => {
  //reducers specify how the app's state changes in response to actions sent the store.
  //only describes what happened
  // but not how app state changed.
  //reducer is a function that accept two arguments (state, action) and returns a new state of the application
  //reducer is a pure function
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 }

    default:
      return state
  }
}

const store = createStore(reducer) //one store for the entire application

console.log(store.getState().numOfCakes) //allows access to state vi getState() method
const unsubscribe = store.subscribe(() => console.log(store.getState())) // register listener via subscribe() method
store.dispatch(buyCake()) //allows state to be updated via dispatch(action)
store.dispatch(buyCake())

unsubscribe() // unsubscribe listener via result of calling subscribe method
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
