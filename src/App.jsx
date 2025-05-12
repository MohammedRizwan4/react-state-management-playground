import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page from "./react/Page";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/react">React</Link>
      </nav>
      <Routes>
        <Route path="react" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
