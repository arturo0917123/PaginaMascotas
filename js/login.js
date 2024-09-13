import React from 'react';
import '../css/login.css'; // Importa los estilos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">Vuexy</div>
        <div className="login-stats">
          <div className="stat-card">
            <h3>Profit</h3>
            <p>Last Month</p>
            <h1>624k</h1>
            <p className="stat-percent">+8.24%</p>
          </div>
          <div className="stat-card">
            <h3>Order</h3>
            <p>Last Week</p>
            <h1>124k</h1>
            <p className="stat-percent">+12.6%</p>
          </div>
        </div>
      </div>
      
      <div className="login-right">
        <h2>Welcome to Vuexy! 👋</h2>
        <p>Please sign-in to your account and start the adventure</p>
        
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="admin@vuexy.com" defaultValue="admin@vuexy.com" />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••" />
          </div>
          
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          
          <button className="login-btn">Login</button>
          <p>New on our platform? <a href="/register">Create an account</a></p>
        </form>
        
        <button className="buy-now">Buy Now</button>
      </div>
    </div>
  );
};

export default Login;