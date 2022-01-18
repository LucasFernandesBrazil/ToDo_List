import React from "react";
import { Row, Col, Checkbox, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./style.css";

export default function TaskList({ task, deleteTask, onComplete }) {
  return (
    <>
      <ul>
        {task.map((item) => (
          <li
            className="task"
            style={{
              textDecoration: item[1] ? "line-through #DDDDDD " : "none",
              color: item[1] ? "#DDDDDD " : "#00000",
            }}
          >
            <Checkbox
              className="checkTask"
              checked={item[1]}
              onChange={() => onComplete(item)}
            ></Checkbox>
            {item}
            <Button
              className="closeButton"
              type="text"
              onClick={() => deleteTask(item)}
            >
              <CloseCircleOutlined style={{ color: "#f5222d" }} />
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
