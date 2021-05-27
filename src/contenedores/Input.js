import React from "react";
import { DatePicker, Button, Typography, Space, Input } from "antd";
export default function Input() {
  return (
    <div>
      <Input placeholder="Large Input" size="large" prefix={<UserOutlined />} />
      <br /> <br />
      <Input placeholder="Deafault Input" prefix={<UserOutlined />} />
      <br /> <br />
      <Input placeholder="Small Input" size="small" prefix={<UserOutlined />} />
    </div>
  );
}
