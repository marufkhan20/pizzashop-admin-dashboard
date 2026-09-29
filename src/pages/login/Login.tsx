const LoginPage = () => {
  return (
    <div>
      <h2>Sign in</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
      <input type="checkbox" name="" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
      <a href="#">Forgot password</a>
    </div>
  );
};

export default LoginPage;
