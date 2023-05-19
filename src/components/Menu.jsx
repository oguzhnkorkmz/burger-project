import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu-title">BURGERLERİMİZ</h1>
      <div className="menu-list">
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
