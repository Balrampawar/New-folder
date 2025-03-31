import { useState, useContext } from "react";
import { login } from "../api";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Hpage from "../components/Hpage";
import "../css/Signup.css"
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login: loginUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(formData);
      loginUser(res.data);
      navigate("/dashboard");
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Redirecting to dashboard...",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.response?.data?.message || "Invalid credentials!",
      });
    }
  };

  return (
    <div className="signup-body">
      <Hpage />
      <div className="signup-left">
        <p className="signup-heading">Sign in</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p>Don't have an account? <span><Link to="/signup">Sign up</Link></span></p>

          <button type="submit" className="continue-btn"  disabled={!formData.email || !formData.password}>
            Login
          </button>

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

export default Login;
