import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Page as ReactDefault } from "./react/Page";
import { Page as ReactLessRender } from "./react-less-render/Page";
import { Page as ReactContextExample } from "./react-context/Page";
import { Page as ReactReduxExample } from "./redux/Page";
import { Page as ReactZustand } from "./zustand/Page";
import { Page as JotaiRookie } from "./jotai-rookie/Page";
import { Page as Jotai } from "./jotai/Page";
import { Page as JotaiPersist } from "./jotai-persist/Page";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/react">React</Link>
        <Link to="/react-less-render">React less render</Link>
        <Link to="/react-context">React Context</Link>
        <Link to="/react-redux">React Redux</Link>
        <Link to="/zustand">Zustand</Link>
        <Link to="/jotai-rookie">Jotai Rookie</Link>
        <Link to="/jotai">Jotai</Link>
        <Link to="/jotai-persist">Jotai Persist</Link>
      </nav>
      <Routes>
        <Route path="react" element={<ReactDefault />} />
        <Route path="/react-less-render" element={<ReactLessRender />} />
        <Route path="/react-context" element={<ReactContextExample />} />
        <Route path="/react-redux" element={<ReactReduxExample />} />
        <Route path="/zustand" element={<ReactZustand />} />
        <Route path="/jotai-rookie" element={<JotaiRookie />} />
        <Route path="/jotai" element={<Jotai />} />
        <Route path="/jotai-persist" element={<JotaiPersist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
