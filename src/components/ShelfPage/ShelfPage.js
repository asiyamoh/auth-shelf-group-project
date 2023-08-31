import React from 'react';
import { useDispatch } from 'react-redux'


function ShelfPage() {
  const [ newItem, setNewItem ] = useState('')
  const dispatch = useDispatch()
  
  
  const handleAddNewItem = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_NEW', payload: newItem })
  }

    return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

      <input
            type="text"
            name="username"
            value={newItem}
            required
            onChange={(event) => setNewItem(event.target.value)}
          />
      <button onClick={handleAddNewItem}></button>
    </div>
  );
}

export default ShelfPage;
