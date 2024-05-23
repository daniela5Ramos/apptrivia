import { DatePicker, ConfigProvider, Button } from "antd";
import Layoutcomponent from "./componets/Layout";
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
      <Layoutcomponent></Layoutcomponent>
    </ConfigProvider>
  );
};

export default App;
