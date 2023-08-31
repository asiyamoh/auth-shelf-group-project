import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';

function ShelfPage() {
  const [ newItem, setNewItem ] = useState('')
  const dispatch = useDispatch()
  
  
  const handleAddNewItem = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_NEW_ITEM', payload: newItem })
  }

    return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <form>
        <input
              type="text"
              name="username"
              value={newItem}
              required
              onChange={(event) => setNewItem(event.target.value)}
              />
        <button onClick={handleAddNewItem}>Add Item</button>
      </form>
    </div>
  );
}

export default ShelfPage;
