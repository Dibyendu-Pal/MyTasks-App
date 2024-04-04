import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

export const ThemeContext = createContext();
export const TaskContext = createContext();

function App() {
  const [nightMode, setNightMode] = useState(false);
  const [taskList, setTaskList] = useState([]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ nightMode, setNightMode }}>
        <Navbar />
        <TaskContext.Provider value={{ taskList, setTaskList }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </TaskContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
