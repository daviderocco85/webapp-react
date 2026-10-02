import { MonumentIndex } from "./pages/MonumentIndex/MonumentIndex";
import { Route, Routes } from "react-router";
import { Layout } from "./layout/Layout";
import { MonumentDetail } from "./pages/MonumentDetail/MonumentDetail";

export const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<MonumentIndex />} />
      <Route path='/:id' element={<MonumentDetail />} />
    </Route>
  </Routes>
);

