import React, { useState } from "react";
import Header from '../../components/main-header/Header.js';
import "./styles.css";
import CustomTextField from "../../components/custom-text-field/CustomTextField";
import { useNavigate, Link} from 'react-router-dom';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [accountCreated, setAccountCreated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = "*This Field Is Required";
    }
    if (!formData.email) {
      newErrors.email = "*This Field Is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "*Valid Email Is Required";
    }
    if (!formData.password) {
        newErrors.password = "*This Field Is Required";
      } else {
        const passwordErrors = [];
    
        if (formData.password.length < 8) {
          passwordErrors.push("*Password must be at least 8 characters long");
        }
        if (!/[A-Z]/.test(formData.password)) {
          passwordErrors.push("*Must contain at least one uppercase letter");
        }
        if (!/[a-z]/.test(formData.password)) {
          passwordErrors.push("*Must contain at least one lowercase letter");
        }
        if (!/[0-9]/.test(formData.password)) {
          passwordErrors.push("*Must contain at least one number");
        }
        if (!/[^A-Za-z0-9]/.test(formData.password)) {
          passwordErrors.push("*Must contain at least one special character");
        }
    
        if (passwordErrors.length > 0) {
          newErrors.password = passwordErrors;
        }
      }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setAccountCreated(true);
    }
  };
  const HandleLoginNavigate = () => {
    navigate('/login');
  };
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="create-account-app-container">
        <Header />
        <div className="create-account-main-content">
    <div className="create-account-form-container">
      <h2>Create Account</h2>
      {accountCreated ? (
            <div className="success-message">
              <p>Account created successfully!</p>
              <button onClick={HandleLoginNavigate}>Take Me To Login</button>
            </div>
          ) : (
      <form onSubmit={handleSubmit}>
        <CustomTextField
          id="fullName"
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder={"John Doe"}
        />
        <CustomTextField
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          error={errors.email}
          placeholder={"123@example.com"}
        />
        <CustomTextField
          id="password"
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          error={errors.password}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
          placeholder={"********"}
        />
        <button type="submit" className="submit-button">
          Create Account
        </button>
        <span class="create-account-link-container">Already have an account?&nbsp;<Link to="/login">Login Here</Link></span>
      </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default CreateAccount;