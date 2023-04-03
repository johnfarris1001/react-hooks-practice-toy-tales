import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, api, deleteItem, addLike }) {
  const toysToShow = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} api={api} deleteItem={deleteItem} addLike={addLike} />
  })

  return (
    <div id="toy-collection">{toysToShow}</div>
  );
}

export default ToyContainer;
