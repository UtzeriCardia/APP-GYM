const FETCH_TRAINING_LIST_DATA = "FETCH_TRAINING_LIST_DATA";
const FETCH_TRAINING_SUCCESS = "FETCH_TRAINING_SUCCESS";
const FETCH_SAVE_GROUP_NAME = "FETCH_SAVE_GROUP_NAME";

export const fetchTrainingData = () => ({
  type: FETCH_TRAINING_LIST_DATA,
});

export const fetchTrainingSuccess = (payload) => ({
  type: FETCH_TRAINING_SUCCESS,
  payload,
});

export const fetchSaveGroupName = (payload) => ({
  type: FETCH_SAVE_GROUP_NAME,
  payload,
});


