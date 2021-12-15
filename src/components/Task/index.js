import React from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

export default function Task(props) {
  return (
    <>
      <ul>
        {props.item.map((item) => (
          <li className="task">{item}</li>
        ))}
      </ul>
    </>
  );
}
