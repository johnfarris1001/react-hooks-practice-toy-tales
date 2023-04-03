import React, { useState } from "react";

function ToyForm({ api, addNewToy }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  function enterName(e) {
    setName(e.target.value)
  }

  function enterImage(e) {
    setImage(e.target.value)
  }

  function addToy(e) {
    e.preventDefault()
    const newToy = {
      name: name,
      image: image,
      likes: 0
    }
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
      .then(r => r.json())
      .then(data => addNewToy(data))
    setName('')
    setImage('')
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addToy}>
        <h3>Create a toy!</h3>
        <input
          onChange={enterName}
          value={name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={enterImage}
          value={image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
