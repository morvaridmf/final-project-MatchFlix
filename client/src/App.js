import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from './components/Movie';
import Login from "./components/login";
// import Profile from "./components/profile";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/logoutbutton";

function App() {
  const { isAuthenticated } = useAuth0();
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <LogoutButton />}
        {!isAuthenticated ? <Login /> : <Movie/>}
      </header>
    </div>
  );
}
export default App;