import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import App from "./components/App/App.tsx";
import { bgColor, textColor, textDarkColor } from "./shared/constans/colors.ts";

import "@assets/styles/_fonts.scss";
import { Provider } from "react-redux";
import store from "@store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
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
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
          Button: {
            defaultActiveBorderColor: bgColor,
            defaultActiveColor: bgColor,
            defaultHoverBorderColor: bgColor,
            defaultHoverColor: textDarkColor,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
