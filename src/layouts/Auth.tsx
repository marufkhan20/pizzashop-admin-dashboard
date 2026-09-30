import { Layout } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";

const AuthLayout = () => {
  const { user } = useAuthStore();

  if (user !== null) {
    return <Navigate to="/" replace={true} />;
  }
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
