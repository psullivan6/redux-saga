const initialState = 6;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return state + action.value;
    case 'COUNTER_DECREMENT':
      return state - action.value;
    default:
      return state;
  }
};

export default counterReducer;
