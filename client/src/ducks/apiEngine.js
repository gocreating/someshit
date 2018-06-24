const SET_API_ENGINE = 'SET_API_ENGINE';

let initState = null;

export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case SET_API_ENGINE: {
      return action.apiEngine;
    }
    default: {
      return state;
    }
  }
};

export const setApiEngine = (apiEngine) => {
  return {
    type: SET_API_ENGINE,
    apiEngine,
  };
};
