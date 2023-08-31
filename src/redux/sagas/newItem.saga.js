import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewItem() {
  try  {


    yield put ({ type: 'ADD_NEW_ITEM,', payload: newItem })
    yield axios.post('/api/shelf', newItem)
  } catch (error) {
    console.log('User get request failed', error)
  }
}

export default addNewItem