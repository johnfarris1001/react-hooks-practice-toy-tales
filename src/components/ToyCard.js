import React from "react";

function ToyCard({ toy, api, deleteItem, addLike }) {
  function handleDeleteClick() {
    fetch(`${api}/${toy.id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(() => deleteItem(toy))
  }

  function handleLikeClick() {
    fetch(`${api}/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...toy, likes: toy.likes + 1 })
    })
      .then(r => r.json())
      .then(toy => addLike(toy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
