import React from "react";
import ReactDOM from "react-dom/client";
import { TanstackQueryProvider } from "@/components/providers";
import { App } from "@/App.tsx";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <App />
    </TanstackQueryProvider>
  </React.StrictMode>
);
