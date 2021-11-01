const FETCH_TRAINING_GROUP_DATA = "FETCH_TRAINING_GROUP_DATA";
const FETCH_TRAINING_GROUP_SUCCESS = "FETCH_TRAINING_GROUP_SUCCESS";
const FETCH_SAVE_EXERCISE = "FETCH_SAVE_EXERCISE";
const FETCH_SAVE_EXERCISE_SUCCESS = "FETCH_SAVE_EXERCISE_SUCCESS";
const FETCH_DELETE_EXERCISE = "FETCH_DELETE_EXERCISE";
const FETCH_DELETE_EXERCISE_SUCCESS = "FETCH_DELETE_EXERCISE_SUCCESS";
const FETCH_UPDATE_EXERCISE = "FETCH_UPDATE_EXERCISE";
const FETCH_UPDATE_EXERCISE_SUCCESS = "FETCH_UPDATE_EXERCISE_SUCCESS";

export const fetchTrainingGroupData = (payload) => ({
  type: FETCH_TRAINING_GROUP_DATA,
  payload,
});

export const fetchTrainingGroupSuccess = (payload) => ({
  type: FETCH_TRAINING_GROUP_SUCCESS,
  payload,
});

export const fetchSaveExercise = (payload) => ({
  type: FETCH_SAVE_EXERCISE,
  payload,
});
export const fetchSaveExerciseSuccess = (payload) => ({
  type: FETCH_SAVE_EXERCISE_SUCCESS,
  payload,
});

export const fetchDeleteExercise = (payload) => ({
  type: FETCH_DELETE_EXERCISE,
  payload,
});
export const fetchDeleteExerciseSuccess = (payload) => ({
  type: FETCH_DELETE_EXERCISE_SUCCESS,
  payload,
});

export const fetchUpdateExercise = (payload) => ({
  type: FETCH_UPDATE_EXERCISE,
  payload,
});
export const fetchUpdateExerciseSuccess = (payload) => ({
  type: FETCH_UPDATE_EXERCISE_SUCCESS,
  payload,
});
