const inititalState = {
  loading: false,
  users: [],
  error: '',
}

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'fetch-uers':
      return { ...state, loading: true }
    case 'fetch-success':
      return { ...state, loading: false, users: action.payload, error: '' }
    case 'fetch-error':
      return { ...state, loading: false, users: [], error: action.payload }

    default:
      return state
  }
}

export default reducer
