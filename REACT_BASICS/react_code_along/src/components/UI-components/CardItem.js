import React, { useEffect, useState } from "react";
import styles from "./CardItem.module.css";
const CardItem = ({ name, url }) => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItemData(data));
  }, [url]);

  return (
    <li className={styles.cardStyles}>
      <h4>{name}</h4>

      <p>Base experience: {itemData.base_experience}</p>
      <p>Order: {itemData.order}</p>
      <p>Weight: {itemData.weight}</p>
      <p>Height: {itemData.height}</p>
    </li>
  );
};

export default CardItem;
