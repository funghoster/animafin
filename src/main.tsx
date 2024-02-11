import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "Poppins",
      },
      components: {
        Layout: {
          siderBg: "#25262d",
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
