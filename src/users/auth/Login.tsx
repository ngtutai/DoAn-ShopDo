import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../auth/Input";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (!email || !password) {
      setErrorMsg("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setErrorMsg("");
    console.log("Đăng nhập", { email, password, rememberMe });

    // Thêm xử lý đăng nhập tại đây
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="tab-content" id="authTabsContent">
              <div
                className="tab-pane fade show active border rounded p-4 bg-white"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <h2 className="mb-3 text-center fw-bold">LOGIN</h2>
                <form className="text-start" onSubmit={formSubmitHandler}>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                      Email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <Input
                        id="loginEmail"
                        type="email"
                        inputRef={emailRef}
                        placeholder="Email ..."
                        required
                        className="border-start-0"
                        label=""
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <Input
                        id="loginPassword"
                        inputRef={passwordRef}
                        placeholder="Password ..."
                        required
                        className="border-start-0"
                        showTogglePassword
                        label=""
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {errorMsg && (
                    <div className="alert alert-danger py-2">{errorMsg}</div>
                  )}

                  {/* Remember me */}
                  <div className="form-check mb-3 d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ cursor: "pointer", transform: "scale(1.2)" }}
                    />
                    <label
                      htmlFor="rememberMe"
                      className="form-check-label text-dark mt-1"
                      style={{ cursor: "pointer", fontSize: "1rem" }}
                    >
                      Remember Me
                    </label>
                  </div>

                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary w-100">
                    <i className="fa-solid fa-right-to-bracket me-2"></i>
                    Login
                  </button>

                  {/* Link to Register */}
                  <p className="mt-3 text-start">
                    You don't have an account?{" "}
                    <Link to="/register" className="text-decoration-none ms-2">
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
