import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThankPage } from "./ThankPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/uk" replace />} />
        <Route path="/uk" element={<App language="uk" />} />
        <Route path="/ru" element={<App language="ru" />} />
        <Route path="/uk/thank" element={<ThankPage language="uk" />} />
        <Route path="/ru/thank" element={<ThankPage language="ru" />} />
        <Route path="*" element={<Navigate to="/uk" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
