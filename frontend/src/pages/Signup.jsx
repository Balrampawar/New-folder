import { useState } from "react";
import { signup } from "../api";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/Signup.css"
import Hpage from "../components/Hpage";


const Signup = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return alert("Passwords do not match");

    try {
      const res = await signup(formData);
      localStorage.setItem("token", res.data.token); // Store token in local storage
      navigate("/preferences");
      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "Redirecting to preferences...",
        timer: 2000,
        showConfirmButton: false,
      });
      setTimeout(() => navigate("/preferences"), 1500);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: err.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="signup-body">
      <Hpage />
      <div className="signup-left">
        <p className="signup-heading">Create an account <span><Link to="/login">sign in instead</Link></span></p>
        <form onSubmit={handleSubmit} className="signup-form">

          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input type={showPassword ? "text" : "password"} id="password" name="password" onChange={handleChange} required />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-wrapper">
              <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" onChange={handleChange} required />
              <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
          <div className="checkbox">
            <input type="checkbox" className="tick" />
            <p>By creating an account, I agree to our Terms of use
              and Privacy Policy </p>
          </div>


          <button type="submit" className="continue-btn"  disabled={!formData.firstName || !formData.password} >Sign Up</button>
        </form>
        <p style={{color:"grey"}}>This site is protected by reCAPTCHA and the
          Google Privacy Policy
          and
          Terms of Service
          apply.</p>
      </div>
      <div className="signup-right">
        <img src="/images/login.png" alt="" />
      </div>
    </div>

  );
};

export default Signup;
