const redux = require('redux')
const axios = require('axios')
const thunk = require('redux-thunk').default

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const inititalState = {
  loading: false,
  users: [],
  error: '',
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}
const fetchUsersFailue = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: '',
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      }
  }
}

const fetchUsers = () => {
  //this is an action creator, normally it is a function that returns an object
  //but thunk middleware enables an action creator function to return a function instead of an object
  // and the returning function does not have to be pure function, therfore can have sideeffects such as async api call
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const users = res.data.map((el) => el.id)
        dispatch(fetchUsersSuccess(users))
      })
      .catch((err) => {
        const error = err.message
        dispatch(fetchUsersFailue(error))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())
