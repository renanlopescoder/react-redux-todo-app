const INITIAL_STATE = {
  description: 'Reed',
  list: [
    {
      _id: 1,
      description: 'Udacity Course',
      done: false
    },
    {
      _id: 2,
      description: 'Cod3r Course',
      done: true
    },
    {
      _id: 3,
      description: 'Alura Course',
      done: false
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED' : return { ...state, description: action.payload }
  
    default:
      return state
  }
}