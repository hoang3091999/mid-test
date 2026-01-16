import Card from "./card.jsx";

function CardList({ data, onSelect }) {
  return (
    <div className="card-list">
      {data.map(item => (
        <Card
          key={item.id}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </div>
  );
}

export default CardList;
