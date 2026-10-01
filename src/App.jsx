import { MonumentIndex } from "./pages/MonumentIndex"
import { Route, Routes } from "react-router";
import { Layout } from "./layout/Layout";

export const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<MonumentIndex />} />
    </Route>
  </Routes>
);

