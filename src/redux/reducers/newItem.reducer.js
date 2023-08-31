import { combineReducers } from 'redux';

function* newItem() {

  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return action.payload;
  }
}

export default newItem