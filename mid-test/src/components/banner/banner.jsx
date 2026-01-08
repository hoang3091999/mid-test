function Banner({ title, content }) {
  console.log("TITLE:", title);
  console.log("CONTENT:", content);

  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Banner;
