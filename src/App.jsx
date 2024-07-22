import "./styles.css";
import React from "react";
import { Button, ConfigProvider, Checkbox } from "antd";

function App() {

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#00b96b",
              borderRadius: 8,
              colorBgContainer: "#f6ffed",
            },
            Checkbox: {
              colorPrimary: "#ff4d4f",
              colorPrimaryHover: "#ff7875",
              borderRadius: 4,
            },
          },
        }}
      >
        <Button type="primary">Button</Button>
        <Checkbox />
        <Checkbox>Label</Checkbox>
        <Checkbox defaultChecked>Checked</Checkbox>
      </ConfigProvider>
    </div>
  );
}

export default App;
