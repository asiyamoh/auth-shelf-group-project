import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';




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
    </div>
  );
}

export default ShelfPage;
