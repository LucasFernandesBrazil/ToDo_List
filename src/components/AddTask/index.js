import React, { useState } from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import Task from "../Task";

export default function AddTask() {
  const [task, setTask] = useState();

  return (
    <>
      <Row>
        <Col span={4}>
          <Input type="text" placeholder="Digite sua tarefa" />
        </Col>
        <Col span={2}>
          <Button
            onClick={() => setTask("Olá")}
            type="primary"
            icon={<PlusCircleOutlined />}
          >
            Adicionar
          </Button>
        </Col>
        <Col span={4}>
          <Task task={task} />
        </Col>
      </Row>
    </>
  );
}
