import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { ConfigProvider } from "antd";
import { bgColor, textColor } from "./shared/constans/colors.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        fontFamily:
          "'Montserrat',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
        fontWeightStrong: 700,
        colorText: textColor,
      },
      components: {
        Layout: {
          siderBg: bgColor,
        },
      },
    }}
  >
    <App />
  </ConfigProvider>
);
