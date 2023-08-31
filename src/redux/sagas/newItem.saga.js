import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewItem(action) {
  try  {
    yield axios.post('/api/shelf', action.payload)
  } catch (error) {
    console.log('User get request failed', error)
  }
}

  function* addItemSaga() {
    yield put ({ type: 'ADD_NEW_ITEM,', addNewItem })
  }

  export default addNewItem