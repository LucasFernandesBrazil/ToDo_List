import React from "react";
import { Row, Col, Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export default function Task(props) {
  return (
    <>
      <p>{props.task}</p>
    </>
  );
}
