import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Task from "../Task";
import "./style.css";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChangeInput(e) {
    const inputTask = e.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(e) {
    //e.preventDefault();
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  }

  return (
    <>
      <Row justify="center" align="center">
        <Form onFinish={handleAddItemToList}>
          <h1>O que você tem que fazer hoje?</h1>
          <Col span={24}>
            <Input.Group
              style={{ display: "flex", justifyContent: "center" }}
              compact
            >
              <Input
                type="text"
                placeholder="Digite sua tarefa"
                onChange={handleChangeInput}
                value={task}
                style={{ width: "calc(100% - 200px)" }}
              />
              <Button type="primary" htmlType="submit">
                Adicionar
              </Button>
            </Input.Group>
          </Col>
        </Form>
      </Row>
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        justify="center"
        align="center"
      >
        <Col style={{ display: "flex", justifyContent: "center" }} span={24}>
          <Task key={taskList} item={taskList} />
        </Col>
      </Row>
    </>
  );
}
