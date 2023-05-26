import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import MovieIndex from "./components/movie/MovieIndex";
import MovieEdit from "./components/movie/MovieEdit";

function App() {
  // Use useState to house token
  const [sessionToken, setSessionToken] = useState("");

  // console.log("App.jsx", sessionToken);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    // ^ .setItem(key, value)
    setSessionToken(newToken);
  };

  // Use useEffect so the session token will not be reset if the page refreshes
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  // Create routing using the Routes tag  with the Route tags holding the individual components/view
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth updateToken={updateToken} />} />
        <Route path="/movie" element={<MovieIndex token={sessionToken} />} />
        <Route
          path="/movie/update/:id"
          element={<MovieEdit token={sessionToken} />}
        />
      </Routes>
    </div>
  );
}

export default App;
