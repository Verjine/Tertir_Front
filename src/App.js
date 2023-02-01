import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
