import React, { useState, useContext } from "react";
import Header from '../../components/main-header/Header.js';
import "./styles.css";
import CustomTextField from "../../components/custom-text-field/CustomTextField";
import { useNavigate, Link,  useLocation} from 'react-router-dom';
import { AuthContext } from "../../components/store/Authentication.js";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const validCredentials = {
    email: "test@example.com",
    password: "Test1234!",
  };
  const [authError, setAuthError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/Snapshop-Frontend';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setAuthError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === validCredentials.email &&
      formData.password === validCredentials.password
    ) {
      login();
      navigate(from, { replace: true, state: { items: location.state?.items } });
    } else {
      setAuthError("*Invalid Credentials, Try Again.");
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="login-app-container">
        <Header />
        <div className="login-main-content">
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder={"123@example.com"}
        />
        <CustomTextField
        id="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
        placeholder="********"
        />
        <div className="reset-password-link">
            <Link to="/Snapshop-Frontend/forgotPassword">Forgot Password?</Link>
        </div>
        {authError && (
            <span className="text-field-error-item ">{authError}</span>
        )}
        <button type="submit" className="submit-button">
            Login
        </button>
        <span class="create-account-link-container">Don't have an account?&nbsp;<Link to="/Snapshop-Frontend/createAccount">Create Account</Link></span>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Login;