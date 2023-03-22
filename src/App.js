import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/common/LayoutDefault";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./components/NotFound";
function App() {
  return (
    <Routes>
      <Route element={<LayoutDefault />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
