import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNewItem() {
  try  {

    const response = yield axios.post('/api/shelf', newItem)
    
    yield put({ type: 'ADD_NEW_ITEM,', payload: response.data })
  } catch (error) {
    console.log('User get request failed', error)
  }
}