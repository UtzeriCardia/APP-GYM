import { combineReducers } from "redux";
import TrainingReducer from "./TrainingReducer";
import TrainingGroupReducer from "./TrainingGroupReducer";

const rootReducer = combineReducers({
  training: TrainingReducer,
  trainingGroup: TrainingGroupReducer,
});

export default rootReducer;
