import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './SignIn.css'; // Import CSS specific to SignIn component
import logo from '../../asset/logo.png';

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setUser({ username: formData.username });
      window.location.href="dashboard"
    }
  };

  return (
    <div className="Background">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="companyLogo">
            <img src={logo} className="logo" alt="Company Logo" />
          </div>
          <div className="UserName">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>
          <div className="Password">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
