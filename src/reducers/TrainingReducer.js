const initialState = {
  data: [],
  loading: false,
};
const TrainingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_TRAINING_SUCCESS":
      return {
        ...state,
        data: payload,
      };
    case "FETCH_TRAINING_LIST_DATA":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default TrainingReducer;
