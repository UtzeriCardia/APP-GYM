import { call, put, take, takeLatest } from "redux-saga/effects";

import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  child,
  update,
} from "firebase/database";
import { eventChannel } from "redux-saga";
import { fetchTrainingSuccess } from "../../actions/Training";

function* fetchData() {
  try {
    const db = getDatabase();

    const getData = new eventChannel((emiter) => {
      const test = ref(db, "training/groups/");
      onValue(test, (snapshot) => {
        const data = snapshot.val();
        emiter({ data });
      });
      return () => {
        test.off();
      };
    });

    while (true) {
      const { data } = yield take(getData);
      yield put(fetchTrainingSuccess(data));
    }
  } catch (e) {}
}

function* saveGroupName({ payload }) {
  try {
    const db = getDatabase();
    const id = yield push(ref(db, "training/groups/")).key;
    yield update(ref(db, `training/groups/${id}`), { name:payload, id });
  } catch (e) {}
}

// function writeNewPost(uid, username, picture, title, body) {
//   const db = getDatabase();

//   // A post entry.
//   const postData = {
//     name: 'pippi',

//   };

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), 'groups')).key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {};
//   // updates['/groups/' + newPostKey] = postData;
//   // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
//   return update(ref(db), `/groups/${newPostKey}`);
// }

function* TrainingSaga() {
  yield takeLatest("FETCH_TRAINING_LIST_DATA", fetchData);
  yield takeLatest("FETCH_SAVE_GROUP_NAME", saveGroupName);
}

export default TrainingSaga;
