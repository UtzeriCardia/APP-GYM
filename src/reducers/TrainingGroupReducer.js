const initialState = {
  data: {},
  loading: false,
};
const TrainingGroupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_TRAINING_GROUP_SUCCESS":
      return {
        ...state,
        data: payload,
      };
    case "FETCH_TRAINING_GROUP_LIST_DATA":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default TrainingGroupReducer;
