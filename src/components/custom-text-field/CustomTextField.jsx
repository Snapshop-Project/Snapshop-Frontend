import React from "react";
import "./CustomTextField.css";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CustomTextField = ({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  const isPasswordField = name === "password";

  return (
    <div className="text-field">
      <TextField
        variant="outlined"
        fullWidth
        id={id}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        type={isPasswordField && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        error={Boolean(error)}
        helperText={
          error && Array.isArray(error) ? (
            <ul className="text-field-error-list">
              {error.map((err, index) => (
                <li key={index} className="text-field-error-item">
                  {err}
                </li>
              ))}
            </ul>
          ) : (
            error
          )
        }
        InputProps={
          isPasswordField
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
        sx={{
          '& .MuiInputBase-root': {
            fontSize: '1.5rem',
          },
          '& .MuiInputLabel-root': {
            fontSize: '1.5rem',
            transform: 'translate(14px, 20px) scale(1)',
          },
          '& .MuiInputLabel-shrink': {
            fontSize: '1.5rem',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        }}
      />
    </div>
  );
};

export default CustomTextField;