function Card({ item, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={item.image} alt={item.movieName} />
      <h3 className="ep">{item.episode}</h3>
      <h3 className="nameM">{item.movieName}</h3>
    </div>
  );
}

export default Card;