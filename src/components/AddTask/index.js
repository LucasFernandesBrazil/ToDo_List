import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Task from "../Task";
import "./style.css";
import FormItem from "antd/lib/form/FormItem";

export default function AddTask() {
  const [taskList, setTaskList] = useState([]);

  function handleAddItemToList(value) {
    if (value) {
      setTaskList([...taskList, value.task]);
    }
    console.log({ taskList });
  }

  function deleteTask(task) {
    console.log("Entrei", task);
    let index = taskList.indexOf(task);
    let newArray = [...taskList];
    newArray.splice(index, 1);
    setTaskList(newArray);
  }

  return (
    <>
      <Row justify="center" align="center">
        <Form onFinish={handleAddItemToList}>
          <h1>O que você tem que fazer hoje?</h1>
          <Col span={24}>
            <Form.Item name="task">
              <Input
                type="text"
                placeholder="Digite sua tarefa"
                style={{ width: "calc(100% - 200px)" }}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Adicionar
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Row>
      <Row
        style={{ display: "flex", justifyContent: "center" }}
        justify="center"
        align="center"
      >
        <Col style={{ display: "flex", justifyContent: "center" }} span={24}>
          <Task key={taskList} deleteTask={deleteTask} task={taskList} />
        </Col>
      </Row>
    </>
  );
}
