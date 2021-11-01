import { put, takeLatest } from "redux-saga/effects";

import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  update,
} from "firebase/database";
import {
  fetchTrainingGroupSuccess,
  fetchTrainingGroupData,
} from "../../actions/TrainingGroup";

function* fetchGroupData({ payload }) {
  try {
    const db = getDatabase();
    const refDb = yield ref(db, `training/groups/${payload}`);
    let data;
    onValue(refDb, (snapshot) => {
      const res = snapshot.val();
      data = res;
    });
    if (data) {
      yield put(fetchTrainingGroupSuccess(data));
    }
  } catch (e) {}
}

function* saveExercise({ payload }) {
  const { itemId, values } = payload;
  try {
    const db = yield getDatabase();
    const id = yield push(ref(db, `training/groups/${itemId}/types`)).key;
    yield update(ref(db, `training/groups/${itemId}/types/${id}`), {
      ...values,
      id,
    });
  } catch (e) {}
}

function* deleteExercise({ payload }) {
  const { id, exerciseId } = payload;
  try {
    const db = yield getDatabase();
    yield set(ref(db, `training/groups/${id}/types/${exerciseId}`), null);
    yield put(fetchTrainingGroupData(id));
  } catch (e) {}
}

function* updateExercise({ payload }) {
  const { itemId, exerciseId, values } = payload;
  try {
    const db = yield getDatabase();
    yield update(ref(db, `training/groups/${itemId}/types/${exerciseId}`), values);
    yield put(fetchTrainingGroupData(itemId));
  } catch (e) {}
}

function* duplicateExercise({ payload }) {
  const { itemId, values } = payload;
  try {
    const db = yield getDatabase();
    const id = yield push(ref(db, `training/groups/${itemId}/types`)).key;
    yield push(ref(db, `training/groups/${itemId}/types`), {
      ...values,
      id,
    });


    // const db = yield getDatabase();
    // yield update(ref(db, `training/groups/${itemId}/types/${exerciseId}`), values);
    yield put(fetchTrainingGroupData(itemId));
  } catch (e) {}
}

function* TrainingGroupSaga() {
  yield takeLatest("FETCH_TRAINING_GROUP_DATA", fetchGroupData);
  yield takeLatest("FETCH_SAVE_EXERCISE", saveExercise);
  yield takeLatest("FETCH_DELETE_EXERCISE", deleteExercise);
  yield takeLatest("FETCH_UPDATE_EXERCISE", updateExercise);
  yield takeLatest("FETCH_DUPLICATE_EXERCISE", duplicateExercise);
}

export default TrainingGroupSaga;
