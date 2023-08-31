import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function ShelfPage() {

  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
  }, [dispatch]);

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
