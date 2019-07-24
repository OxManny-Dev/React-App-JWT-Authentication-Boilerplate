import { INCREMENT_COUNTER, DECREMENT_COUNTER} from "../actions/types";

const INITIAL_STATE = {
  counter: 0
};


export default function(state = INITIAL_STATE, action) {
  console.log(state);
  switch(action.type) {
    case INCREMENT_COUNTER:
      return {...state, counter: state.counter + 1};
    case DECREMENT_COUNTER:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
};