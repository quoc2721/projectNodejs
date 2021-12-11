import "./login.css";
import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="login-form">
          <form>
            <h1>Đăng nhập</h1>

            <div className="form-group">
              <label>Địa chỉ Email</label>
              <input
                variant="outline-dark"
                type="email"
                className="form-control"
                placeholder="Nhập email..."
              />
            </div>

            <div className="form-group">
              <label>Mật khẩu </label>
              <input
                variant="outline-dark"
                type="password"
                className="form-control"
                placeholder="Nhập password..."
              />
            </div>

            <p className="forgot-password text-right">
              <a href={{}}>Quên mật khẩu</a>
            </p>
            <button type="submit" className="btn btn-submit">
              ĐĂNG NHẬP
            </button>
            <div className="auth">
              <button className="btn btn-primary">
                <i class="fab fa-facebook-f"></i>Facebook
              </button>
              <button className="btn btn-danger">
                <i class="fab fa-google-plus-g"></i>Google+
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
