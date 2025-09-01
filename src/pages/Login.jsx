import React, { useState } from "react";
import { supabase } from "../integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Bypass authentication - allow any data to login
    if (email && password) {
      // Simply redirect to booking page without real authentication
      navigate('/booking');
    } else {
      setError("Please enter both email and password");
    }

    setLoading(false);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Top Image */}
        <div className="login-image">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="food"
          />
        </div>

        <h2 className="login-title">LOGIN</h2>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="USER NAME"
            />
            <span className="icon">👤</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
            />
            <span className="icon">🔒</span>
          </div>

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <a href="/forgot-password" className="forgot">
            Forgot password
          </a>
          <a onClick={handleBack} className="signup" style={{ cursor: 'pointer' }}>
             Back
          </a>
        </div>
      </div>
    </div>
  );
}