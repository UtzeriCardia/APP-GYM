import { all, fork } from "redux-saga/effects";

import HomeSaga from "../pages/Home/saga";
import TrainingSaga from "../pages/Training/saga";
import TrainingGroupSaga from "../pages/TrainingGroup/saga";

export default function* rootSagas() {
  const sagas = [
    yield fork(HomeSaga),
    yield fork(TrainingSaga),
    yield fork(TrainingGroupSaga),
  ];
  yield all(sagas);
}
