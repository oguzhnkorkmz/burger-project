import "../styles/Menu.css";

function MenuItem({ image, name, content, price }) {
  return (
    <div className="menu-item">
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h1 style={{ padding: "5px" }}>{name}</h1>
      <h6 style={{ padding: "5px" }}>{content}</h6>
      <p style={{ padding: "5px" }}>{price}</p>
    </div>
  );
}

export default MenuItem;
