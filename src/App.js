import './App.css';
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <BrowserRouter >
      <NavBar/>
        <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
