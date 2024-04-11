import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import Dashboard from "./components/Dashboard";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Lógica de autenticação aqui
    if (password == "123") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Dashboard />
        </>
      )}
    </div>
  );
}

export default App;
