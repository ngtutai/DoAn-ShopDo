import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../auth/Input";

const Register = () => {
  const displayRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const display = displayRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    // Kiểm tra các trường rỗng
    if (!display || !email || !password || !confirmPassword) {
      setMessage("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Kiểm tra mật khẩu
    if (password !== confirmPassword) {
      setMessage("Mật khẩu không khớp");
      return;
    }

    setMessage("");
    console.log("Đăng ký", { display, email, password });
    // TODO: xử lý đăng ký ở đây (gọi API, lưu localStorage, v.v.)
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="border rounded p-4 bg-white">
              <h2 className="mb-3 text-center fw-bold">REGISTER</h2>
              <p>{message}</p>
              <form className="text-start" onSubmit={formSubmitHandler}>
                {/* Display Name */}
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">
                    Display Name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <Input
                      id="registerName"
                      type="text"
                      label=""
                      placeholder="Display Name ..."
                      className="border-start-0"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <Input
                      id="registerEmail"
                      type="email"
                      label=""
                      placeholder="Email ..."
                      className="border-start-0"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <Input
                      id="registerPassword"
                      label=""
                      placeholder="Password ..."
                      className="border-start-0"
                      showTogglePassword
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label
                    htmlFor="registerConfirmPassword"
                    className="form-label"
                  >
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <Input
                      id="registerConfirmPassword"
                      label=""
                      placeholder="Confirm Password ..."
                      className="border-start-0"
                      showTogglePassword
                    />
                  </div>
                </div>

                {/* Submit button (no functionality) */}
                <button type="button" className="btn btn-primary w-100">
                  <i className="fa-solid fa-user-plus me-2"></i>Register
                </button>

                <p className="mt-3 text-start">
                  You already have an account?{" "}
                  <Link to="/login" className="text-decoration-none ms-2">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
