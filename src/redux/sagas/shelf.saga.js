import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchShelf() {
    try {
        
        const shelf = yield axios.get('/api/shelf');
        console.log('get all:', shelf.data);
        
        yield put({ 
            type: 'SET_SHELF', 
            payload: shelf.data
        });

    } catch (error){
        console.log('get all error', error);
    }
        
}

function* getSaga() {  
    yield takeEvery('FETCH_SHELF', fetchShelf);
}

export default getSaga;