import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    console.log('inside deleteItem', action.payload)
    try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put({ 
            type: 'FETCH_SHELF', 
        });

    } catch {
        console.log('get all error');
    }

}

function* deleteItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteItemSaga;
