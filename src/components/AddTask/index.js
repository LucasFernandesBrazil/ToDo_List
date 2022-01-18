import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import TaskList from "../TaskList";
import "./style.css";
import FormItem from "antd/lib/form/FormItem";

export default function AddTask() {
  const [taskList, setTaskList] = useState([]);

  function handleAddItemToList(value) {
    if (value) {
      setTaskList([...taskList, [value.task, false]]);
    }
    console.log({ taskList });
  }

  function deleteTask(task) {
    let index = taskList.indexOf(task);
    let newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }

  function onComplete(task) {
    let index = taskList.indexOf(task);
    let newTaskList = [...taskList];
    newTaskList[index][1] = newTaskList[index][1] ? false : true;
    setTaskList(newTaskList);
  }

  return (
    <>
      <Row justify="center" align="center">
        <Col>
          <h1>O que você tem que fazer hoje?</h1>
        </Col>
      </Row>
      <Row justify="center" align="center">
        <Form
          onFinish={handleAddItemToList}
          style={{ width: "35%", display: "flex", justifyContent: "center" }}
        >
          <Col span={19}>
            <Form.Item name="task">
              <Input
                type="text"
                placeholder="Digite sua tarefa"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col style={{ display: "flex", justifyContent: "end" }} span={3}>
            <Form.Item>
              <Button size="100%" type="primary" htmlType="submit">
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
          <div
            style={{ width: "35%", display: "flex", justifyContent: "center" }}
          >
            <TaskList
              key={taskList}
              deleteTask={deleteTask}
              onComplete={onComplete}
              task={taskList}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
