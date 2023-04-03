import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  const API = 'http://localhost:3001/toys'

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setToys(data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(toy) {
    setToys([...toys, toy])
  }

  function deleteItem(deletedItem) {
    const updatedToys = toys.filter(item => item.id !== deletedItem.id)
    setToys(updatedToys)
  }

  function addLike(updatedToy) {
    const updatedToys = toys.map(toy => {
      if (updatedToy.id === toy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm api={API} toys={toys} addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} api={API} deleteItem={deleteItem} addLike={addLike} />
    </>
  );
}

export default App;
