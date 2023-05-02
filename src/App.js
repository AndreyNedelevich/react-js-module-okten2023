import './App.css';
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import AppRoutes from "./components/AppRoutes";
import {useEffect} from "react";
import {logginActions} from "./reducers/logginReducers";
import {useDispatch} from "react-redux";
import Loader from "./components/Loader/Loader";

function App() {

    const dispatchFanction=useDispatch()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatchFanction(logginActions.changeIsUserLoggedIn(true));
        }
        // setLoading(false);
    }, [dispatchFanction])


  return (
    <BrowserRouter >
      <NavBar/>
        <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
