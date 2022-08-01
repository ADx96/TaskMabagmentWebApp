import React, { useState } from "react";
import "../../Styles/Menu.css";
import { useNavigate, useLocation } from "react-router-dom";
import Items from "./MenuItems";

const Menu = () => {
  const [selected, setSelected] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <ul className="nav-group">
        {Items.map((item, index) => (
          <li
            key={item.key}
            onClick={() => {
              setSelected(index);
              navigate(`${item.path}`);
            }}
          >
            <div
              className={
                index === selected || pathname === item.path
                  ? "nav_link active"
                  : "nav_link"
              }
            >
              <i className={`pi ${item.icon} nav_icon`} name="home-outlin"></i>
              <span className="nav_name">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
