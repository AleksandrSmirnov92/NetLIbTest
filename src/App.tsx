import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Form from "./Components/Form/Form";
import FormEdit from "./Components/FormEdit/FormEdit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/edit" element={<FormEdit />} />
      </Routes>
    </div>
  );
}

export default App;
