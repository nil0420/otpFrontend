import React, { useState } from "react";
import axios from "axios";
import "../../App.css";

// for production
const API_URL = import.meta.env.VITE_API_URL;

const Register = () => {
  const [accountType, setAccountType] = useState("organisation");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organisation: "",
    website: "",
    email: "",
    phone: "",
    city: "",
    regNumber: "",
    referral: "",
  });

  const [step, setStep] = useState("register"); // register → otp → success
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Please enter your work email");
      return;
    }
// "/api/send-otp"
    try {
      const res = await axios.post(`${API_URL}/send-otp`, { email: formData.email });
      if (res.data.success) {
        setStep("otp");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  // Handle OTP Verification
  //  "/api/verify-otp"
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/verify-otp`, {
        email: formData.email,
        otp,
      });
      if (res.data.success) {
        setStep("success");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Create your Talrn Account</h1>
      <p className="register-subtitle">
        Talrn is an exclusive network of the world’s top talent. <br />
        We provide access to top companies and resources that can help accelerate your growth.
      </p>

      {/* Step 1: Register Form */}
      {step === "register" && (
        <>
          {/* Toggle */}
          <div className="register-toggle">
            <label>
              <input
                type="radio"
                name="accountType"
                value="organisation"
                checked={accountType === "organisation"}
                onChange={(e) => setAccountType(e.target.value)}
              />{" "}
              Organisation
            </label>
            <label>
              <input
                type="radio"
                name="accountType"
                value="individual"
                checked={accountType === "individual"}
                onChange={(e) => setAccountType(e.target.value)}
              />{" "}
              Individual
            </label>
          </div>

          {/* Conditional Rendering of Forms */}
          {accountType === "organisation" ? (
            <form className="register-form" onSubmit={handleRegister}>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="First Name *" onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name *" onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="jobTitle" placeholder="Job title *" onChange={handleChange} />
                <input type="text" name="organisation" placeholder="Organization *" onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="website" placeholder="Website *" onChange={handleChange} />
                <input type="email" name="email" placeholder="Work email *" onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="phone" placeholder="Phone number *" onChange={handleChange} />
                <input type="text" name="city" placeholder="City *" onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="regNumber" placeholder="Corporate Registration Number *" onChange={handleChange} />
                <input type="text" name="referral" placeholder="Referral code" onChange={handleChange} />
              </div>

              <button type="submit" className="register-btn">Register</button>
            </form>
          ) : (
            <form className="register-form" onSubmit={handleRegister}>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="First Name *" onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name *" onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="email" name="email" placeholder="Work email *" onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone number *" onChange={handleChange} />
              </div>
              <div className="form-row">
                <input type="text" name="city" placeholder="City *" onChange={handleChange} />
                <input type="text" name="referral" placeholder="Referral code" onChange={handleChange} />
              </div>

              <button type="submit" className="register-btn">Register</button>
            </form>
          )}
        </>
      )}

      {/* Step 2: OTP Form */}
      {step === "otp" && (
        <form className="register-form" onSubmit={handleVerifyOtp}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button type="submit" className="register-btn">Verify OTP</button>
        </form>
      )}

      {/* Step 3: Success Page */}
      {step === "success" && (
        <div className="register-success">
          <h2>🎉 Registration Successful!</h2>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Register;
