import React, { useState } from "react";
import Header from '../../components/main-header/Header.js';
import "./styles.css";
import CustomTextField from "../../components/custom-text-field/CustomTextField";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const validate = () => {
    if (!email) {
      return "*This Field Is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "*Valid Email Is Required";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      setLinkSent(true);
    }
  };
  const HandleLoginNavigate = () => {
    navigate('/login');
  };
  return (
    <div className="create-account-app-container">
        <Header />
        <div className="create-account-main-content">
    <div className="create-account-form-container">
      <h2>Reset Password</h2>
      {linkSent ? (
            <div className="success-message">
              <p>Reset Password Link Sent To: {email}</p>
              <button onClick={HandleLoginNavigate}>Go To Login</button>
            </div>
          ) : (
      <form onSubmit={handleSubmit}>
        <CustomTextField
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          error={error}
          placeholder={"123@example.com"}
        />
        <button type="submit" className="submit-button">
            Reset Password
        </button>
      </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;