import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";

function App() {
  // Use useState to house token
  const [sessionToken, setSessionToken] = useState("");

  // console.log("App.jsx", sessionToken);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    // ^ .setItem(key, value)
    setSessionToken(newToken);
  };

  // Create routing using the Routes tag  with the Route tags holding the individual components/view
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth updateToken={updateToken} />} />
        <Route path="/movie" element={<h2>Movie Page Placeholder</h2>} />
      </Routes>
    </div>
  );
}

export default App;
