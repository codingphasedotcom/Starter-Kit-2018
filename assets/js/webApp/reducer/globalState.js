const INITIAL_STATE = {all: [], post: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'FIRST_ACTION':
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}
