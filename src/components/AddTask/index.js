import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Task from "../Task";
import "./style.css";
import FormItem from "antd/lib/form/FormItem";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleAddItemToList(value) {
    if (value) {
      setTaskList([...taskList, value.task]);
    }
    console.log({ taskList });
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
          <Task key={taskList} item={taskList} />
        </Col>
      </Row>
    </>
  );
}
