import React from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

export default function Task(props) {
  return (
    <>
      <ul>
        {console.log({ props })}
        {props.item.map((item) => (
          <li className="task">
            {item}
            <Button>X</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
