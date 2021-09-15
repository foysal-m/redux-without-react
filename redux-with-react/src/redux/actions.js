import { axios } from 'axios'
const userRequest = () => {
  return {
    type: 'fetch-users',
  }
}
const userRequestSuccess = (users) => {
  return {
    type: 'fetch-success',
    payload: users,
  }
}
const userRequestFailure = (error) => {
  return {
    type: 'fetch-error',
    payload: error,
  }
}

const fetchUser = () => {
  return (dispatch) => {
    dispatch(userRequest())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const users = data.map((el) => el.name)
        dispatch(userRequestSuccess(users))
      })
      .catch((err) => {
        const error = err.message
        dispatch(userRequestFailure(error))
      })
  }
}

export default fetchUser
