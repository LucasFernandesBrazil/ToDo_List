import React from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

export default function Task({ task, deleteTask }) {
  return (
    <>
      <ul>
        {console.log({ task })}
        {task.map((item) => (
          <li className="task">
            {item}
            <Button onClick={() => deleteTask(item)}>X</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
