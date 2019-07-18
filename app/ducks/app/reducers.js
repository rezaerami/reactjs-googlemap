import types from './types';

const sampleDefaultState = {
  sample: null,
};

const sampleReducer = (state = sampleDefaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.DO_SAMPLE:
      return {
        ...state,
        sample: payload,
      };
    default:
      return state;
  }
};

export default sampleReducer;
