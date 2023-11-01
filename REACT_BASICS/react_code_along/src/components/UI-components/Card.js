import CardItem from "./CardItem";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  return (
    <ul className={styles.cardContainerStyles}>
      {data.map((item) => (
        <CardItem name={item.name} url={item.url} />
      ))}
    </ul>
  );
};

export default Card;
