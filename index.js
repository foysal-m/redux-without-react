const redux = require('redux')
const reduxLogger = require('redux-logger')
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
  //but action creator is  a funtion that returns an action object
  return {
    type: BUY_CAKE,
    info: 'first redux action', //action is just an object
    // action object has type property (normally a string constant) const BUY_CAKE = 'BUY_CAKE'
  }
}
function buyIceCream() {
  //but action creator is  a funtion that returns an action object
  return {
    type: BUY_ICECREAM,
    info: 'first redux action', //action is just an object
    // action object has type property (normally a string constant) const BUY_CAKE = 'BUY_CAKE'
  }
}

const initialNumOfCake = {
  numOfCakes: 10,
}
const initialNumOfIceCream = {
  numofIceCreams: 20,
}
const cakeReducer = (state = initialNumOfCake, action) => {
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
const IceCreamReducer = (state = initialNumOfIceCream, action) => {
  //reducers specify how the app's state changes in response to actions sent the store.
  //only describes what happened
  // but not how app state changed.
  //reducer is a function that accept two arguments (state, action) and returns a new state of the application
  //reducer is a pure function
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numofIceCreams: state.numofIceCreams + 20 }

    default:
      return state
  }
}
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
})
const store = createStore(rootReducer, applyMiddleware(logger)) //one store for the entire application

console.log(store.getState().numOfCakes) //allows access to state vi getState() method
const unsubscribe = store.subscribe(() => {}) // register listener via subscribe() method
store.dispatch(buyCake()) //allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe() // unsubscribe listener via result of calling subscribe method
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
