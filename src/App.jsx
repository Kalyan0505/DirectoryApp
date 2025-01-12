import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
export const ContextData = createContext();
function App() {
  const [arrayOfPerson, setArrayOsPerson] = useState([]);
  return (
    <>
      <ContextData.Provider value={{ arrayOfPerson, setArrayOsPerson }}>
        <HomePage />
      </ContextData.Provider>
    </>
  );
}

export default App;
