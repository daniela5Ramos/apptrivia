import { DatePicker, ConfigProvider, Button } from "antd";

import "./App.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7A83E1",
        },
      }}
    >
      <DatePicker />
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </ConfigProvider>
  );
};

export default App;
