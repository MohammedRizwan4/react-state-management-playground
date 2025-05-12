import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Page as ReactDefault } from "./react/Page";
import { Page as ReactLessRender } from "./react-less-render/Page";
import { Page as ReactContextExample } from "./react-context/Page";
import { Page as ReactReduxExample } from "./redux/Page";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/react">React</Link>
        <Link to="/react-less-render">React less render</Link>
        <Link to="/react-context">React Context</Link>
        <Link to="/react-redux">React Redux</Link>
      </nav>
      <Routes>
        <Route path="react" element={<ReactDefault />} />
        <Route path="/react-less-render" element={<ReactLessRender />} />
        <Route path="/react-context" element={<ReactContextExample />} />
        <Route path="/react-redux" element={<ReactReduxExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
