import React from "react";
import { DatePicker, Button, Typography } from "antd";

export default function Boton() {
  return (
    <div>
      <Button type="primary"> Primary </Button>
      <Button type="default"> default </Button>
      <Button type="dashed"> dashed </Button>
      <Button type="link"> link </Button>
      <Button type="ghost"> ghost </Button>
      <Button type="text"> text </Button>

      <br></br>

      <Button danger type="primary">
        {" "}
        danger{" "}
      </Button>
      <Button ghost> ghost </Button>
      <Button disabled> disabled </Button>
      <Button loading type="primary">
        {" "}
        loading{" "}
      </Button>
    </div>
  );
}
