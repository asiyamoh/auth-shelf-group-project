
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ShelfPage() {
  const [newItemName, setNewItemName] = useState("");
  const [newItemUrl, setNewItemUrl] = useState("");

  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelfReducer);
  console.log("heressss", shelf);

  useEffect(() => {
    dispatch({ type: "FETCH_SHELF" });
  }, [dispatch]);

  const handleAdd = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_ITEM",
      payload: { description: newItemName, image_url: newItemUrl },
    });
  };

  return (
    <div className="container">
      <div>
            <form onSubmit={handleAdd}>
                <input 
                type="text" 
                placeholder='Enter Item Name'
                value={newItemName}
                onChange={(event) => setNewItemName(event.target.value)}
                />
                <input 
                type="text" 
                placeholder='Enter Image URL'
                value={newItemUrl}
                onChange={(event) => setNewItemUrl(event.target.value)}
                />
                <button type="submit">ADD</button>
            </form>

      </div>
      <h2>Shelf</h2>
      {shelf.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.description}</p>
            <img src={item.image_url} height="200px"></img>
            <div>
              <button onClick={() => dispatch({ type: "DELETE_ITEM", payload: item.id })}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShelfPage;
