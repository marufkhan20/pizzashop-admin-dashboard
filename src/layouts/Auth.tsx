import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Outlet />
    </Layout>
  );
};

export default AuthLayout;
