import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./utils/router/router";
import { MantineProvider } from "@mantine/core";
import { Apptheme } from "./utils/theme.ts";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={Apptheme}>
      <BrowserRouter>
        <Router />
        {/* <App /> */}
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
