import React from "react";

const handleClick=()=>{
  event.preventDefault()
  window.location.href="https://zerodha-clone-abnm0boe3-arnavsirohis-projects.vercel.app/";
}
const SignIn = () => {
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Sign In</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3" onClick={handleClick}>Sign In</button>
        </form>

        <div className="text-center mb-2">or sign in with</div>

        <div className="d-grid gap-2">
          <button className="btn btn-outline-danger">
            <i className="fab fa-google me-2"></i> Sign in with Google
          </button>
          <button className="btn btn-outline-primary">
            <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
          </button>
          <button className="btn btn-outline-dark">
            <i className="fab fa-apple me-2"></i> Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
