import "../styles/register.css";

const Register = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <div className="form-group error">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <small>Please enter name.</small>
      </div>
      <div className="form-group success">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <small>Please enter email.</small>
      </div>
      <div className="form-group">
        <label htmlFor="passworm">Password</label>
        <input type="password" id="password" />
        <small>Please enter password.</small>
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" />
        <small>Please confirm password.</small>
      </div>
      <button>Register</button>
    </div>
  );
};

export default Register;
