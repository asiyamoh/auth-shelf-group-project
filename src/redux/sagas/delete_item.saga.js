import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    try {
        yield axios.delete('/api/shelf', action.payload);

    } catch {
        console.log('get all error');
    }

}

function* deleteItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteItemSaga;
