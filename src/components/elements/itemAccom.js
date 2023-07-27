import React from "react";
import "./../../style/item.css";
import { Link } from "react-router-dom";

const ItemLog = (props) => {
  return (
    <div className="item-log">
      <Link to={`/logement/${props.data.id}`}>
        <h3>{props.data.title}</h3>
      </Link>
    </div>
  );
};

export default ItemLog;
