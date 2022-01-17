import React from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

export default function Task({ task, deleteTask, onComplete }) {
  return (
    <>
      <ul>
        {console.log({ task })}
        {task.map((item) => (
          <li
            className="task"
            style={{ color: item[1] ? "#FFFFFF" : "#DDDDD" }}
          >
            {item}
            <Button onClick={() => deleteTask(item)}>X</Button>
            <Button onClick={() => onComplete(item)}>Check</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
