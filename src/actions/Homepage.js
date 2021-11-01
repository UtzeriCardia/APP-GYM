const FETCH_LIST_DATA = "FETCH_LIST_DATAA";
const FETCH_SUCCESS = "FETCH_SUCCESSS";

export const fetchData = () => ({
  type: FETCH_LIST_DATA,
});

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});
