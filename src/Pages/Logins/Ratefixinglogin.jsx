import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const Ratefixinglogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let isAuthenticated = false;

  const handleLogin = () => {
    if (
      (username === "mukilan" ||
        username === "lokesh" ||
        username === "natesan") &&
      password === "royality"
    ) {
      navigate("/ratefixinghome");
      isAuthenticated = true;
      function exp(){
        
};
    } else {
      setError("Username or password is incorrect");
      isAuthenticated = false;
    }

  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/ratefixinghome");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <select className="neumorphic-select p-5 rounded-lg bg-white mb-4">
        <option>Rate Fixing</option>
        <option>Marketing</option>
        <option>Planning</option>
        <option>Progress</option>
        <option>Shop Floor</option>
        <option>Inspection</option>
      </select>

      <div className="neumorphic1 p-8 rounded-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="neumorphic-input outline-none w-full p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="neumorphic-input outline-none w-full p-2 rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <Link
            to="/"
            className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg"
          >
            <FontAwesomeIcon icon={faAngleLeft} /> HOME
          </Link>
          <button
            onClick={handleLogin}
            className="neumorphic-button bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export var password = "royality";
export default Ratefixinglogin;
