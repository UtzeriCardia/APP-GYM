import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSuccess } from "../../actions/Homepage";

import { getDatabase, ref, set, onValue, get, child } from "firebase/database";

function* fetchData() {
  try {
    // WRITE
    const db = getDatabase();
    set(ref(db, "test"), {
      nome: "Test 2",
    });

    // READ VALUE ONCE
    // const test = ref(db, "test/");
    // onValue(test, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log("data", data);
    // });

    //READ ALL
    // const dbRef = ref(getDatabase());
    // get(child(dbRef, `test/`))
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const response = yield call(fetch, "https://fakestoreapi.com/products");
    const responseBody = yield response.json();
    if (responseBody) {
      yield put(fetchSuccess(responseBody));
    }
  } catch (e) {}
}

function* HomeSaga() {
  yield takeLatest("FETCH_LIST_DATA", fetchData);
}

export default HomeSaga;
